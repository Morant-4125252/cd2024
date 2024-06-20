var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://morant-4125252.github.io/cd2024/content/index.html \n 網誌: \xa0https://morant-4125252.github.io/cd2024/blog \n 簡報:\xa0 https://morant-4125252.github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/Morant-4125252/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'H1', 'text': '', 'tags': '', 'url': 'H1.html'}, {'title': 'W10', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W1', 'text': '2b 建個人課程倉儲 \n \n 登入 github.com, 連結到 https://github.com/mdecycu/cmsimde_site, 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄. \n \n https://github.com/mdecycu/cmsimde_site 與 https://github.com/mdecycu/cmsite 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組. \n \n 上述建立個人課程 cd2024 倉儲與網站的操作影片, 建立的範例網站為: https://scrum-1.github.io/cd2024/ \n \n', 'tags': '', 'url': 'W1.html'}, {'title': '下載可攜套件檔案', 'text': '下載可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) \n \n 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) \n \n 將個人倉儲 import 至 Replit \n 從 Replit 帳號下方的 Account, Connected Services(連線服務區) 點選 Connect 後, 讓 Github 授權 Replit, 將在 Replit 中的倉儲改版後, 有權限推回 Github. 設定 Replit 與 Github 應用授權的說明影片 \n \n 在 Replit Editor(編輯器中) 使用 Ctrl + z 執行 undo \n \n 在 Replit Editor(編輯器中) 使用 Ctrl + y 執行 redo \n \n', 'tags': '', 'url': '下載可攜套件檔案.html'}, {'title': '設定 Github 帳號的雙重認證', 'text': '說明如何設定 Github 雙重認證, 其中手機必須先安裝 Github Mobile, 也可以使用 Authy App 作為認證套件, 一旦在 Github 帳號下的 Setting 中的 Password and authentication 啟用雙重認證, 最後必須下載對應的 Recovery codes 並存入隨身碟, 而且要寄到個人的電子郵箱. \n \n \n', 'tags': '', 'url': '設定 Github 帳號的雙重認證.html'}, {'title': 'w2', 'text': '\n 利用 Github Classroom 指定分組倉儲 \n 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. \n \n 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. \n \n 範例分組倉儲: https://github.com/mdecd2024/test-ag1 \n \n 期中分組作業名稱甲班為 2a, 乙班期中分組作業名稱則為 2b, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... \n \n 至於乙班第一組組長則必須在期中作業 2b 項下, 建立名稱為 midbg1 的 Team, 其餘乙班各組的期中報告 Team 名稱則分別為 midbg2, midbg3 .... \n \n 說明乙班第一組組長如何建立 midbg1 的過程1 \n \n 說明乙班第一組組長如何建立 midbg1 的過程2 \n \n 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則可後續配合期末作業名稱 2a2 與 2b2, 由甲班各組組長建立 Team finalag1, finalag2 ...., 而乙班組長則建立 Team finalbg1, finalbg2 .... 等. \n \n 根據上述規劃, 乙班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2b-midbg1, 第一組的期中報告網站將位於: https://mdecd2024.github.io/2b-midbg1. \n \n 至於乙班第一分組的期末協同倉儲將位於: https://github.com/mdecd2024/2b2-finalbg1, 且對應的期末報告網站將位於:  https://mdecd2024.github.io/2b2-finalbg1 . \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '\n 期中協同分組報告 \n 請參考 \xa0 https://github.com/mdecd2024/test-ag1 \xa0 中的 latex 目錄與 downloads 目錄中的 \xa0 https://github.com/mdecd2024/test-ag1/blob/main/downloads/report_github.txt \n 並根據下列教學範例: \n 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 \n 說明 如何在 Replit 維護分組倉儲 \n 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. \n 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 \xa0 miktex-portable.7z \xa0 (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: \xa0 latex_images_github.7z \xa0 (需要密碼) \n 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf \xa0 or \xa0 local \xa0 download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) \n 英文單字查詢: \xa0 2021_odoo_reading.html \n \n', 'tags': '', 'url': 'w3.html'}, {'title': '將組員的個人倉儲設為分組倉儲子模組', 'text': 'cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為: \n \n git submodule add 組員的個人倉儲網址 組員的學號 \n \n 例如: 假設組員的 cd2024 個人倉儲位於: https://github.com/scrum-1/cd2024, 且該組員的學號為 41123299, 則該組員必須在進入該組的倉儲目錄後, 執行: \n \n git submodule add https://github.com/scrum-1/cd2024.git 41123299 \n \n 如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲. \n \n 另外一個使用 Github Classroom 派送分組倉儲的好處, 是 mdecycu 自動成為各分組倉儲的管理者之一, 若各組在改版或解決衝突的過程發生問題, mdecycu 可以協助處理. \n \n 一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用: \n \n git clone --recurse-submodules 加上各組的倉儲 URL \n \n 以第一組期中分組倉儲的 git clone 為例, 並且使用 putty session 名稱 github.com: \n \n git clone --recurse-submodules git@github.com:mdecd2024/2b-midbg1.git \n \n 而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行. \n', 'tags': '', 'url': '將組員的個人倉儲設為分組倉儲子模組.html'}, {'title': 'w4', 'text': '\n \xa0Odoo 參考文章中英並列 \n 教學影片: 以第六組為例, 利用 Codespaces 維護倉儲內容 \n \n 教學影片: 如何利用 Github Actions 編譯 LaTeX 得到分組 pdf 報告 \n \n 教學影片: 如何利用 Gitpod 加上 token 取得分組倉儲權限 \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w4 2b 分組任務', 'text': '請各組自行搜尋前面已經發布的教學影片, 分別 \n \n 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 \n 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 \n 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 \n \n', 'tags': '', 'url': 'w4 2b 分組任務.html'}, {'title': 'Github 個人與分組倉儲的維護方式', 'text': '個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 "-" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. \n \n 各組員與分組倉儲的資料, 包括文字資料 (含 LaTeX 報告章節資料)、零組件檔案、零件工程圖或組立圖檔 (含 BOM 與爆炸圖), 以及目前正在整理的教學影片, 或者是各學員將操作流程錄製成的影片或 Wink 資料. \n', 'tags': '', 'url': 'Github 個人與分組倉儲的維護方式.html'}, {'title': 'W5', 'text': '\n \n \n \xa0教學影片分組整理並自評 \n 假如你好奇這個概念哪裡來的: 請參考反思一 and 反思二. \n \n 對於事不關己或者不明白為何團隊中的成員 (這裡指教與學的相關人、事與物), 總讓人提不起興趣, 但若能在過程中找到主要在乎的角色、任務或者緣由, 或許就能從應付著手, 一直到終於了解天下沒有白吃的午餐, 所有的努力付出, 終究不會白費. \n \n 此外, 假如想參考先前學長推甄研究所的相關資訊, 請利用 Team code: n9k585c 進入自行查看. \n \n cd2024 2a 1 blog setup 1 \n \n cd2024 2a 2 odoo plm簡介 2 \n \n cd2024 2a w2 3 如何建立各組的 Team midag1 並利用 Codespaces 維護內容 3 \n \n cd2024 2a w2 4 利用 Replit 管理 Github Classroom 分組倉儲 4 \n \n cd2024 2a w2 5 如何利用近端可攜環境與外部 IPv4 開啟動態網站 5 \n \n cd2024 2a w3 如何將學員倉儲設為分組倉儲的子模組 6 \n \n cd2024 2a w3 利用分組協同建立 LaTeX 報告 7 \n \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'w5 2b 分組任務', 'text': '請各組自行搜尋前面已經發布的教學影片, 分別 \n \n 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 \n 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 \n 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 \n \n', 'tags': '', 'url': 'w5 2b 分組任務.html'}, {'title': '如何統整組員子模組中的協同設計網誌', 'text': '當各組員每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 pelicalconf.py, 使用 Pelican 設定中的 PATH 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌. \n \n 實際的設定操作 pelicanconf_py.txt, 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory, 並避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄. \n \n 完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表示要利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行. \n \n 過程中, 各組員必須將個別的網誌 .md 檔案名稱加上前綴字串, 例如: "學號_" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用該組員的學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容. \n \n', 'tags': '', 'url': '如何統整組員子模組中的協同設計網誌.html'}, {'title': '利用 NX1872 協同繪製零組件', 'text': '\n 從電腦輔助設計室中的電腦 C:\\Program Files\\Siemens\\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. \n 電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX. \n 下載 NX2027_lite \xa0 (需要密碼, 解開後約 8G, 這個版本僅供參考) \n 下載 \xa0 Siemens NX1872.7z \xa0 (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) \n \n', 'tags': '', 'url': '利用 NX1872 協同繪製零組件.html'}, {'title': 'w6', 'text': 'ODOO, NX, Sourcetree, Github and Replit \n 利用 ODOO PLM, Siemens NX, Sourcetree, Github 分組倉儲與 Replit 打造協同產品開發環境 \n 下載 \xa0 Siemens NX1872.7z \xa0 (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) \n 下載 \xa0 Sourcetree_portable.7z \xa0 (需要密碼) \n 其他工具包括 CoppeliaSim, SciTE, Portablegit, Putty, Zoomit, Python, Solvespace 以及 Process Explorer 等. \n 配置重點: NX, Sourcetree 與 CoppeliaSim 設定檔案與管理分組倉儲的權限, 必須存至可攜系統, 並分別從可攜系統啟動後的命令列中啟動. \n 下載 \xa0 Solvespace_model _2d_for_cd2024_w6.7z \n', 'tags': '', 'url': 'w6.html'}, {'title': 'CoppeliaSim 檔案格式', 'text': '下載 \xa0 copsim_midterm_cube2_xml.7z \n \n CoppeliaSim 目前提供二位元與 XML 場景格式 \n XML 場景支援儲存為單一檔案或多個模型與影像檔案 \n 4.5.1 之後的版本, 其設定資料並非在套件目錄, 而是儲存在操作系統的 AppData/Roaming 目錄中 \n 4.5.1 版儲存為多 XML 檔案格式時, 無法帶出場景中的 png 圖檔, 4.6.0 版之後才修正此一錯誤 \n 目前能夠支援 IPv4 與 IPv6 網際場景模擬的版本僅修改至 4.5.1 版 \n XML 檔案應用廣泛, 協同產品設計過程可能需要利用程式方法處理零組件與模擬場景互相轉換取得的 XML 格式檔案 \n \n', 'tags': '', 'url': 'CoppeliaSim 檔案格式.html'}, {'title': 'w8', 'text': '\n 協同資料處理 \n 根據 2a_cd2024_midterm.csv, 以及 2b_cd2024_midterm.csv 中的學號、Github 帳號與組別, 設法在各組員與分組網站中, 列出各學員的 cd2024 倉儲、網站, 以及各班各組的期中報告倉儲與網站連結. \n \n 過程中, 請詳細說明各組及學員的倉儲與網站中的連結資料如何建立? 手動輸入? 利用程式進行處理? 或者採分工合作方式建立? \n \n 2b step1 取出資料放入數列 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': '心得', 'text': '我是問chatgpt ，但發現問題有時候跳針，所以試了很久，要把問題問得非常精確才跑出你所要的資料 \n 1. 讀取CSV文件 \n 我們需要讀取 2a_cd2024_midterm.csv 和 2b_cd2024_midterm.csv 文件，這兩個文件包含學號、Github帳號和組別等信息。 \n 2. 合併數據 \n 我們需要根據學號來合併這兩個文件的數據，確保每個學員的信息完整。 \n 3. 生成連結 \n 個人倉儲和網站連結 ：根據每個學員的GitHub帳號，生成其個人cd2024倉儲和網站的連結。 \n 組倉儲和網站連結 ：根據每個組的組別信息，生成期中報告倉儲和網站的連結。 \n 4. 建立數據結構 \n 我們將這些生成的連結放入一個數據結構中，方便後續使用。 \n 5. 輸出結果 \n 將最終結果輸出到新的CSV文件或其他格式中，以便查看和使用。 \n 以下是詳細步驟的Python代碼： \n import pandas as pd \n # 讀取CSV文件 data_2a = pd.read_csv(\'/mnt/data/2a_cd2024_midterm.csv\') data_2b = pd.read_csv(\'/mnt/data/2b_cd2024_midterm.csv\') \n # 合併數據 merged_data = pd.merge(data_2a, data_2b, on=\'學號\') \n # 定義函數來生成連結 def generate_github_repo_link(github_account, repo_name):  return f\'https://github.com/{github_account}/{repo_name}\' \n def generate_github_pages_link(github_account, repo_name):  return f\'https://{github_account}.github.io/{repo_name}/\' \n # 為每個學員生成倉儲和網站連結 merged_data[\'cd2024_repo\'] = merged_data[\'Github帳號\'].apply(lambda x: generate_github_repo_link(x, \'cd2024\')) merged_data[\'cd2024_site\'] = merged_data[\'Github帳號\'].apply(lambda x: generate_github_pages_link(x, \'cd2024\')) \n # 為每個組生成期中報告倉儲和網站連結 group_data = merged_data.groupby(\'組別\').first().reset_index() group_data[\'midterm_repo\'] = group_data[\'Github帳號\'].apply(lambda x: generate_github_repo_link(x, \'midterm_report\')) group_data[\'midterm_site\'] = group_data[\'Github帳號\'].apply(lambda x: generate_github_pages_link(x, \'midterm_report\')) \n # 合併組的期中報告連結回到原數據 final_data = pd.merge(merged_data, group_data[[\'組別\', \'midterm_repo\', \'midterm_site\']], on=\'組別\', suffixes=(\'\', \'_group\')) \n # 選擇需要的列 final_data = final_data[[\'學號\', \'Github帳號\', \'組別\', \'cd2024_repo\', \'cd2024_site\', \'midterm_repo\', \'midterm_site\']] \n # 輸出結果到CSV文件 final_data.to_csv(\'/mnt/data/final_cd2024_midterm_results.csv\', index=False) \n print("完成數據處理並輸出結果到 \'final_cd2024_midterm_results.csv\'") \n 詳細說明 \n 讀取CSV文件 ：使用 pandas 讀取CSV文件，將數據放入DataFrame中。 \n 合併數據 ：根據學號來合併兩個DataFrame，確保每個學員的信息完整。 \n 生成連結 ： \n 個人cd2024倉儲和網站連結：使用GitHub帳號生成。 \n 組期中報告倉儲和網站連結：使用組別信息生成。 \n 建立數據結構 ：將生成的連結添加到DataFrame中。 \n 輸出結果 ：將最終的數據輸出到新的CSV文件中。 \n 這樣做可以確保數據的準確性和一致性，並且利用程式進行處理可以減少人工輸入錯誤。 \n', 'tags': '', 'url': '心得.html'}, {'title': 'w9', 'text': '\n \xa0期中整合 \n 影片 \n \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '建立各班學員的倉儲、網站與分組連結 \n 這是 W10 實習的任務一: \n 已知: \xa0 2b 初步資料放入數列 \xa0 可以將 \xa0 2b.txt \xa0 即時資料取出, 並且將每一行隔開後, 逐一放入數列. \n 後續處理: 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. \n 學員倉儲連結 template: https://github.com/學員帳號/cd2024 \n 學員網站連結 template: https://學員帳號.github.io/cd2024 \n 2b 分組倉儲連結 template: https://github.com/mdecd2024/2b-midbg組別 \n 2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別 \n 處理結果: \n 列出 2b 各學員評分相關網站 \n 列出 2a 各學員評分相關網站 \n', 'tags': '', 'url': 'w10.html'}, {'title': '鋼球平衡台 PID 控制與模擬', 'text': '這是 W10 實習的任務二: \n 請下載 \xa0 cd2024_ball_balancing_platform_control_ref.7z , 閱讀後請將摘要內容放入個人與分組網誌中. \n 閱讀結果: \n 各篇論文要點摘要： \n 論文一：Construction and theoretical study of a ball balancing platform \n 探討自動控制理論在穩定動態系統時的局限性，以球體平衡平台為例。 建立球體平衡平台的理論模型，並與實際搭建的平台進行比較。 分析理論與實際結果之間的差異，探討控制理論與系統實施的挑戰。 \n 結論： \n 線性控制可以實現球體平衡平台的良好性能，但存在靜態誤差。 理論與實際結果的差異主要來自於物理模型的誤差和電子元件的非理想特性。 穩定動態系統的性能受限於狀態調整的靈活性、控制器設計和輸入數據的準確性。 \n 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation \n 提出基於 PID 控制器的解決方案，以提高球體在平台上的位置調節精度。 使用 FPGA 實現平行計算，以提高系統速度和性能。 開發球體平衡平台的轉移函數，並合成 PID 控制器。 \n 結論： \n 透過 FPGA 平行計算實現的 PID 控制器能有效提高球體位置調節精度。 該方案可應用於控制具有多個參數的高速物件。 \n 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach \n 設計和比較三種控制結構，用於自動穩定球體在平台上的位置和軌跡追踪：PD 控制器、狀態空間反饋和帶狀態空間回饋的狀態空間觀測器。 使用牛頓法推導球體平衡平台的數學模型，並設計直流電機位置迴路控制。 \n 結論： \n 三種控制結構均能實現穩定控制，但狀態空間觀測器具有最佳性能。 該研究建立了一個教育平台，用於向非技術人員解釋基本控制系統原理。 \n 論文四：Design and Implementation a Ball Balancing System for Control Theory Course \n 開發一個球體平衡系統，使用微控制器和控制演算法來調節球體在梁上的平衡。 利用超聲波傳感器獲取球體位置，並使用 PID 控制演算法調整梁的角度。 開發介面程式，將即時位置曲線繪製在 MATLAB 中。 \n 結論： \n 球體平衡系統是一個低成本的教育工具，可用於教授控制理論的應用。 該系統允許學生將理論知識應用於實踐中，並了解封閉迴路回饋系統和 PID 演算法的原理。 \n 論文五：Ball on the plate balancing control system \n 設計一個二自由度球體平衡實驗平台，用於測試和驗證平衡控制演算法。 使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 \n 結論： \n 該系統使用步進電機替代伺服電機，並無需外部電腦進行圖像處理，具有成本效益和易於控制的優勢。 未來計劃改進球體位置回饋信號的濾波，以提高控制系統的速度和品質。 \n 論文六：2D Ball Balancer Control using QUARC \n 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 \n 結論： \n PD 和 PID 控制器均能實現球體位置控制，但 PID 控制器在跟踪斜坡和正弦參考信號時具有更好的性能。 該實驗涵蓋了建模、控制器設計、模擬和實施等多個控制系統的關鍵步驟，為學生提供了寶貴的學習經驗。 \n 接下來, 必須要設法了解, 哪一篇或哪幾篇論文對我們解決下列問題最有參考價值! \n 請從下列檔案中, 在個人與分組網站中說明從零組件繪圖、轉入 CoppeliaSim, 並透過 PID 控制後, 展示在不同的控制參數設定, 鋼球的 x 座標與 y 座標運動路徑圖. \n ball_beam_balancing_PID_control_coppeliasim_1d_and_2d_cd2024_w9.7z \xa0 (password required to download) \n Solvespace_model _2d_for_cd2024_w6.7z \n 實習步驟: \n 開啟可攜程式系統中的 CoppeliaSim 開啟鋼球平衡台模擬場景 啟動可攜程式系統, pip install keyboard cbor pyzmq matplotlib 在 SciTE 中執行上列程式, 確定系統穩定後, 按下 q 終止模擬 matplotlib 將畫出鋼球在平台上的 x 與 y 座標圖 \n', 'tags': '', 'url': '鋼球平衡台 PID 控制與模擬.html'}, {'title': '鋼球平衡台零組件繪圖', 'text': '這是 W10 實習的任務三: \n 請根據 \xa0 Solvespace_model _2d_for_cd2024_w6.7z \xa0 零組件尺寸, 利用 \xa0 Siemens NX1872.7z \xa0 (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) 執行零組件繪圖, 完成後請將過程影片放入個人與分組網站中. \n  ##########################################  \n', 'tags': '', 'url': '鋼球平衡台零組件繪圖.html'}, {'title': 'w12', 'text': 'NX零組件: 零件3 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w17', 'text': '', 'tags': '', 'url': 'w17.html'}, {'title': 'h1', 'text': '\n \n', 'tags': '', 'url': 'h1.html'}, {'title': 'h2', 'text': '\n', 'tags': '', 'url': 'h2.html'}, {'title': 'h3', 'text': '\n \n \n \n \n', 'tags': '', 'url': 'h3.html'}]};