from flask import Flask, jsonify, request
import urllib.request
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import re
from bs4 import NavigableString
import json
from urllib.parse import urlparse


app = Flask(__name__)
url_timestamp = {}
url_viewtime = {}
prev_url = ""
cleaned_sum = ""
synonyms = []


        
@app.route('/read_page', methods=['POST'])
def read_page():

        summary = "getting info"

        resp_json = request.get_data()
        params = resp_json.decode()
        url = params.replace("url=", "")
        req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        # with urllib.request.urlopen(req) as req:
        #     s = req.read()
        t = urlparse(url).netloc
        cmp_url = '.'.join(t.split('.')[-2:])

        print(url)

        if(cmp_url == "wikipedia.org"):
                source = urlopen(url).read()
                soup = BeautifulSoup(source,'html.parser')

                # Main heading of the page
                main_heading = soup.find('h1').text

                # All the headings from different sections on the page
                headings = []
                for heading in soup.find_all('h2'):
                        if(heading == 'See also'):
                                break
                        headings.append(heading.text)

                for i in range(0, len(headings)):
                        headings[i] = headings[i].replace('[edit]', '')

                h2_headers = ""
                for i in range(0, len(headings)):
                        h2_headers += headings[i]
                        h2_headers += "<br>"

                # Introduction paragraphs scraped
                intro_paras = []
                body_tag = soup.find('body')
                tag = body_tag
                ending_tag = soup.find('h2')
                while(tag != ending_tag):
                        tag = tag.next
                        if isinstance(tag, NavigableString):
                                continue
                        elif (tag == None):
                                continue
                        else:
                                if(tag.name == 'p'):
                                        para = tag.text
                                        para = re.sub(r'\[.*?\]+', '', para)
                                        para = para.replace('\n', '')
                                        #print(para)
                                        if(len(para) > 0):
                                                intro_paras.append(para)

                # Reading out all paragraphs within sections
                paras = {k:[] for k in headings}
                def get_section_id(section_name):
                        section_id_words = section_name.split(' ')
                        section_id = '_'.join(section_id_words)
                        return section_id

                def section_wise_paras(section_id, section_name, paras, idx):
                        start_tag = soup.find(id = section_id)
                        parent_tag1 = start_tag.parent

                        next_section = headings[idx + 1]
                        next_section_id = get_section_id(next_section)
                        pagespace = soup.find(id = next_section_id)
                        parent_tag2 = pagespace.parent

                        next = parent_tag1
                        while(next != parent_tag2):
                                next = next.next_sibling
                                if isinstance(next, NavigableString):
                                        continue
                                elif (next == None):
                                        continue
                                else:
                                        if(next.name == 'p'):
                                                para = next.text
                                                para = re.sub(r'\[.*?\]+', '', para)
                                                para = para.replace('\n', '')
                                                #print(para)
                                                if(len(para) > 0):
                                                        paras[section_name].append(para)

                # Storing all paragraphs in every section to paras dictionary.
                # NOTE: DO NOT RUN THIS CELL OR FUNCTION MORE THAN ONCE
                for i in range(1, len(headings) - 2):
                        section_name = headings[i]
                        section_id = get_section_id(section_name)
                        section_wise_paras(section_id, section_name, paras, i)


                # added heading and introduction paragraphs in paras
                paras[main_heading] = paras.pop('Contents')
                for para in intro_paras:
                        paras[main_heading].append(para)

                # Code for image caption
                def section_index(section_name, headings):
                        for i in range(0, len(headings)):
                                if(headings[i] == section_name):
                                        return i

                img_captions = {k:[] for k in headings}

                def section_wise_img_captions(section_name, paras, idx):
                        section_id = get_section_id(section_name)
                        start_tag = soup.find(id = section_id)
                        parent_tag1 = start_tag.parent

                        next_section = headings[idx + 1]
                        next_section_id = get_section_id(next_section)
                        pagespace = soup.find(id = next_section_id)
                        parent_tag2 = pagespace.parent

                        tag = parent_tag1
                        while(tag != parent_tag2):
                                tag = tag.next_sibling
                                if isinstance(tag, NavigableString):
                                        continue
                                else:
                                        if(tag.name == 'div'):
                                                if(tag.has_attr('class')):
                                                        if(tag.attrs['class'][0] == 'thumb'):
                                                                img_caption = tag.text
                                                                img_caption = re.sub(r'\[.*?\]+', '', img_caption)
                                                                img_caption.replace('\xa0', '')
                                                                img_captions[section_name].append(img_caption)

                for i in range(1, len(headings) - 2):
                        section_name = headings[i]
                        idx = section_index(section_name, headings)
                        section_wise_img_captions(section_name, img_captions, idx)

                headings.pop(0)

                final_dict = {k:{} for k in paras}

                for para in paras:
                        final_dict[para]['para'] = (paras[para])

                for heading in headings:
                        final_dict[heading]['images'] = (img_captions[heading])

                result = json.dumps(final_dict)
                return result

                # except urllib.error.URLError as error:
                #         print('We failed to reach a server.')
                #         print('Reason: ', error.reason)
                #         return jsonify(error.reason), 200

                # except urllib.error.HTTPError as error:
                #         print('The server couldn\'t fulfill the request.')
                #         print('Error code: ', error.code)
                #         return jsonify(error.code), 200
                # except ValueError as error:
                #         print(url)
                #         print("Cannot Read")
                #         print("but different now", summary)
                #         return jsonify("Error: Cannot Read"), 200
                # except IndexError as error:
                        # return jsonify("Buffering"), 200

        else:
                # Specify url of the web page
                source = urlopen(req).read()
                # Make a soup 
                soup = BeautifulSoup(source,'lxml')

                t = urlparse(url).netloc
                type1 = t
                type2 = t[4:]

                page_title = soup.head.title.text
                # page_title

                body_tag = soup.find('body')

                total_sections = 0
                all_section_text = {}

                all_section_text[0] = page_title

                tag = body_tag
                count = 0
                while(tag != None):
                        if(tag == body_tag):
                                tag = body_tag.next
                        else:
                                tag = tag.next_sibling
                        if isinstance(tag, NavigableString):
                                continue
                        if tag is None:
                                continue
                        #children = tag.findChildren()
                        #print(tag.name, [child.name for child in children])
                        #print('___________')

                        if(tag.name == 'script' or tag.name == 'link' or tag.name == 'style'):
                                continue
                                #text = tag.text.strip()
                                #if(len(text) > 0):
                                #print(text)
                                #print('___________')
                        else:
                                children = tag.findChildren()
                                children = list(children)
                                sz = len(children)
                                vis = [0] * sz
                                section_text_list = []
                                section_dict = {}
                                paras = []
                                headings = []
                                text = []
                                anchor_links = {}
                                images = []
                                count_images = 0
                                for child in children:
                                        subchildren = child.findChildren()
                                        #print(child.name, [subchild.name for subchild in subchildren])
                                        if(child.name == 'a'):
                                                URL = child.get('href')
                                                url_link = str(URL)
                                                if(len(url_link) > 0 and url_link[0] == '#'):
                                                        continue

                                                elif(len(url_link) > 0 and url_link[0] == '/'):
                                                        continue
                                                elif(url_link[:8] == 'https://'):
                                                        url_link = str(URL)
                                                        #print(url_link)
                                                        t = urlparse(URL).netloc
                                                        #print(t)
                                                        #print(url_link)
                                                        vis = 0
                                                        if(t == type2):
                                                                length = len(type2) + 8 + 1
                                                                link_text = url_link[length: ]
                                                                if(link_text == '' and vis == 0):
                                                                        anchor_links['Home'] = url_link
                                                                        vis = 1
                                                                else:
                                                                        anchor_links[link_text] = url_link
                                                                #print(url_link)

                                                        elif(t == type1):
                                                                length = len(type1) + 8 + 1
                                                                link_text = url_link[length: ]
                                                                if(link_text == ''):
                                                                        anchor_links['Home'] = url_link
                                                                        vis = 1
                                                                else:
                                                                        anchor_links[link_text] = url_link
                                                                #print(url_link)
                                                        else:
                                                                anchor_links[url_link] = url_link
                                                                #print(url_link)

                                        if(len(subchildren) == 0):
                                                #print(child.name)
                                                section_text = child.text.strip()
                                                section_text = section_text.lstrip()
                                                if(child.name == 'img' and len(section_text) == 0):
                                                        img_tag = child
                                                        img_url = img_tag['src']
                                                        images.append(img_url)
                                                        count_images += 1
                                                        # print('Image')
                                                elif(len(section_text) != 0):
                                                        if(child.name != 'script' and child.name != 'style'):
                                                                if(child.name == 'h1' or child.name == 'h2' or child.name == 'h3' or child.name == 'h4' or child.name == 'h5' or child.name == 'h6'):
                                                                        headings.append(section_text)
                                                                elif(child.name == 'p'):
                                                                        paras.append(section_text) 
                                                                else:
                                                                        text.append(section_text)
                
                                                                #print(child.name)
                                                                #print(section_text)

                                # print('____________________________________')
                                total_sections += 1
                                section_dict['paras'] = paras
                                section_dict['headings'] = headings
                                section_dict['text'] = text
                                section_dict['images'] = images
                                section_dict['anchors'] = anchor_links

                                all_section_text[total_sections] = section_dict
                        count += 1
                        #print(tag.text)

                result = json.dumps(all_section_text)
                return result

                # except urllib.error.URLError as error:
                #         print('We failed to reach a server.')
                #         print('Reason: ', error.reason)
                #         return jsonify(error.reason), 200

                # except urllib.error.HTTPError as error:
                #         print('The server couldn\'t fulfill the request.')
                #         print('Error code: ', error.code)
                #         return jsonify(error.code), 200
                # except ValueError as error:
                #         print(url)
                #         print("Cannot Read")
                #         print("but different now", summary)
                #         return jsonify("Error: Cannot Read"), 200
                # except IndexError as error:
                #         return jsonify("Buffering"), 200
    
app.run(host='0.0.0.0', port=5000)
