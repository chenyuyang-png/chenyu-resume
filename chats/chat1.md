# 個人履歷網頁

_Started 2026-06-02 17:36 UTC_

---

## User

我要做一個個人的履歷我有附上一個word，然後我的文字都要打上去你可以把它分成好幾個分頁，有首頁跟個人經歷等

https://heavenly-direction-723038.framer.app
這是我喜歡的風格但是顏色不喜歡，最後是我喜歡的顏色我的網頁底色跟圖四一樣底色其他配色你幫我分配

## Assistant

_[tool: list_files]_

_[tool: view_image]_

まず添付されたWordファイルと画像、そしてデザインシステムを確認します。

_[tool: list_files]_

_[tool: list_files]_

_[tool: run_script]_

Design systemは空のようです。Wordファイルの内容を読みます。

_[tool: copy_files]_

_[tool: run_script]_

_[tool: read_file]_

_[tool: run_script]_

The extraction has XML noise. Let me get a clean version pulling only text in document order.

_[tool: read_file]_

_[tool: run_script]_

Content fully extracted. Let me sample exact colors from the palette image so I match them precisely.

_[tool: copy_files]_

_[tool: run_script]_

## Assistant

_[tool: snip]_

_[tool: questions_v2]_

Content and colors are locked in. I have everything from the Word doc — a rich brand-operator résumé for 楊宸祐 — and exact palette values. Before I build, a few questions so I nail the style you want.

## User

Questions answered:
- reference_feel: 平滑的捲動進場動畫, 左側固定導覽 / 分頁切換
- photo: 要，我會提供照片（先放佔位框）
- nav_style: 首頁 Home（姓名＋一句定位＋聯絡）, 關於我 About, 核心能力 Capabilities, 4 年創辦旅程 Journey（重點區）, 技能 Skills, 學歷與前段經歷 Background
- journey_layout: 2
- motion: 明顯：捲動進場、數字滾動、平滑切換
- math_motif: 不用

## Assistant

_[tool: update_todos]_

全部問題清楚了。我會做一個**單一網站、左側固定導覽、分頁切換**的個人履歷，配上**捲動進場動畫＋數字滾動**,使用你的地中海色盤(底色為米白 `#F5EEE3`),六個分頁:Home / About / Capabilities / Journey / Skills / Background。Journey 用卡片式呈現(你選的選項 2),人像先放佔位框。不放數學符號母題。

開始規劃並建立檔案結構。

_[tool: write_file]_

_[tool: write_file]_

Now the main HTML with all six pages:

_[tool: write_file]_

Now the JS — routing, scroll-entrance, and number rolling:

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

The font URL has a typo (`opt_sz` should be `opsz`). Fixing:

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: str_replace_edit]_

Fonts load and the editorial look is working. The nav labels are wrapping (首/頁). Let me fix that — Chinese labels shouldn't break.

_[tool: save_screenshot]_

Let me check the Journey page (the centerpiece) and the number rolling.

_[tool: view_image]_

_[tool: show_html]_

Cache from before the nav fix. Let me reload and capture the year cards.

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: save_screenshot]_

Nav is fixed now. The scroll didn't take in the capture — let me force it and reveal the cards.

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: save_screenshot]_

The card body reads well. Let me see a full year card — header with the YEAR number and the result figure at the bottom.

_[tool: view_image]_

_[tool: save_screenshot]_

Beautiful — the editorial card with colored top border, serif YEAR number, and tag reads exactly right. Let me verify the result figure + number roll at the card bottom.

_[tool: view_image]_

_[tool: multi_screenshot]_

The result figure rolls and renders cleanly (500 萬 / 第一年營收), and YEAR 02's border picks up ochre. The system is cohesive. Quick check of the remaining pages:

_[tool: str_replace_edit]_

Excellent across the board. One fix: skill tags are wrapping mid-word (品牌定/位). Let me make all chips/tags nowrap.

_[tool: str_replace_edit]_

_[tool: update_todos]_

All pages render cleanly. Marking work complete and surfacing to you.

_[tool: done]_

_[tool: fork_verifier_agent]_

做好了 — 一個六分頁的個人履歷網站。

**結構**(左側固定導覽,點擊切分頁,各頁捲動進場 + 數字滾動):
- **首頁 Home** — 姓名、一句定位、4 項關鍵數據(年數 / 3,800 萬 / 660% / 10+ 通路會滾動)、目標職位、3:4 人像佔位框
- **關於我 About** — 自述 + 引言 + 四個工作信念(換位思考 / 解決問題 / 坦承錯誤 / 不偏離初衷)
- **核心能力 Capabilities** — 八大能力卡片
- **創辦旅程 Journey**(重點)— 4 張年度卡片(你選的卡片式),每張帶當年成果與營收數字
- **技能 Skills** — 八類技能標籤
- **學歷與經歷 Background** — 離岸風電經歷 + 中興大學碩/學士

**配色**:底色用你指定的米白 `#F5EEE3`,五個地中海色分配為——赭紅(主強調)、陶土、土黃、橄欖綠、沙色,逐年卡片輪替不同色製造節奏。沒有放數學符號母題。

**接下來你可以告訴我**:
1. 把**個人照片**傳給我,我換掉佔位框
2. 任何**文字微調**(內容我已照 Word 全數放上)
3. 想不想加**淺色/深色切換**或匯出 PDF 版

## User

這是大頭照，然後我覺得可以考慮在首頁重新排版放在名字的右邊，其餘是下面我覺得大致上都做得很棒，但感覺可以考慮多設計一些讓我安插，根號拾的照片，例如櫃位等

## User

Apply comment

## Assistant

_[tool: snip]_

_[tool: grep]_

The photos are landscape — let me switch the gallery slots to a landscape aspect ratio.

_[tool: str_replace_edit]_

_[tool: done]_

Done — the brand-moment slots are now landscape (4:3) to match your horizontal photos.已改成橫向(4:3)的照片框，符合你的橫式照片。需要的話我也可以把「創辦旅程」卡片頂部的橫幅再調寬一點或換比例。

## User

Apply comment

## Assistant

_[tool: grep]_

_[tool: read_file]_

I'll add a fourth photo and rebuild the gallery as an editorial mosaic where each slot follows its own photo proportion (mix of landscape + portrait). Let me read the exact block:

_[tool: str_replace_edit]_

_[tool: read_file]_

Now the CSS — a masonry layout that packs photos by their natural height (landscape vs portrait), so it truly arranges by photo ratio:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Update the mobile rule (the `.g-3` class no longer exists):

_[tool: show_html]_

_[tool: save_screenshot]_

court

_[tool: view_image]_

_[tool: eval_js]_

The masonry isn't splitting into 2 columns. Let me check the computed layout:

_[tool: read_file]_

`columns:2` resolved to count 1 — let me check the saved CSS and use explicit `column-count`:

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

`column-count:2` works (slots now 232px). The shorthand wasn't applying — let me use the explicit property:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

Let me verify the computed column count after the edit (the screenshot tool may render narrow):

_[tool: eval_js]_

Stylesheet seems cached. Let me inspect the live CSSOM rule:

_[tool: eval_js]_

_[tool: str_replace_edit]_

Found the bug — I put the single-column override in the `max-width:1080px` block, but the preview is 924px so it collapses too early. Let me move it to the 860px breakpoint:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: done]_

The mosaic now arranges by proportion — landscape frames (門市空間 / 百貨櫃位 / 品牌團隊) at 3:2 and the tall portrait frame (主力產品) at 3:4, packed masonry-style. Finalizing.

_[tool: fork_verifier_agent]_

完成 ✅

「根號拾 品牌現場」現在有 **4 格**,並改成**依照片比例排版的拼貼式版面**:
- **門市空間 / 百貨櫃位 / 品牌團隊** — 橫向框(3:2)
- **主力產品** — 直向框(3:4),自動以較高的形狀嵌入

版面會像雜誌一樣依各張照片的橫/直比例自動堆疊。拖入照片後可在框內**雙擊**微調裁切與位置。需要再加格、或想換某格的橫直方向都可以跟我說。

## User

Apply comment

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll remove the "品牌現場" framing and the four photos, leaving a single logo drop slot you can fill:Now add the logo-block styles (replacing the now-unused gallery styles):

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Clean up the orphaned mobile mosaic rule and let the logo block stack on mobile:

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

完成 ✅

把「BRAND MOMENTS 品牌現場」整段拿掉了,四張照片改成**一個 Logo 框**(240×240,採完整顯示不裁切),旁邊標示「Logo ｜ 根號拾 Gēn House」。直接把 logo 圖檔拖進框裡即可填入,想換隨時可重拖。需要調整 logo 框大小或位置再跟我說。

## User

Apply comment

## Assistant

_[tool: grep]_

I'll make each stat a flex column so all numbers bottom-align on one baseline and captions start at the same y:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: str_replace_edit]_

You want the logo slot to blend into the page rather than sit in a box. I'll match its background to the site paper and drop the frame:

_[tool: view_image]_

_[tool: show_html]_

Let me reload and capture the stats row and logo clearly:

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

Let me verify the stat number alignment directly via measurement:

_[tool: save_screenshot]_

Numbers now bottom-align perfectly (all at 599px) with captions at the same y (613px) — same height fixed. Now let me confirm the logo blends into the page:

_[tool: view_image]_

_[tool: done]_

Both done: stat numbers now share one baseline (all aligned, no more high/low), and the logo slot blends into the page background with no frame — a transparent logo will sit naturally on the paper.court

_[tool: fork_verifier_agent]_

完成 ✅

1. **首頁數據** — 四個數字現在統一底線對齊,標題也同一高度,不再一高一低。
2. **Logo 框** — 拿掉外框與底色,背景跟網站米白一致,拖入 logo(建議透明背景 PNG)後就像直接印在頁面上,不會有「貼上去」的方塊感。

## User

Apply comment

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

_[tool: save_screenshot]_

The hash-change was resetting scroll to top. Let me capture without re-triggering navigation:

_[tool: view_image]_

_[tool: eval_js]_

The units look right now (4年, 3,800萬). But I see bordered boxes around the captions and vertical text — let me check whether that's in the source or a stray edit:

_[tool: grep]_

There's a stray border on `.cap` from a direct-edit override. Let me find and remove it:

_[tool: grep]_

_[tool: read_file]_

Found it — a class collision. The home stat captions use `<div class="cap">`, which also matches the **Capabilities card** `.cap` style (border, padding, background). That's why boxes appeared. Let me rename the stat caption class. First the HTML:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: done]_

Fixed — the captions no longer have the stray boxes (that was a class name collision with the Capabilities cards). Now the stats read cleanly: **4 年 · 3,800 萬 · 660% · 10+** with the 年/萬 units enlarged to sit naturally beside each number, all on one baseline.

_[tool: fork_verifier_agent]_

## Assistant

court

_[tool: snip]_

完成 ✅ 「年」「萬」單位放大到貼著數字、視覺份量一致,同時順手修掉了讓字句變直排的小框框(那是跟「核心能力」卡片撞名造成的)。現在四個數據乾淨俐落、同一底線對齊。

## User

Apply comment

## User

Apply comment

## Assistant

_[tool: screenshot_user_view]_

_[tool: grep]_

I can blend the logo's background into the page using a multiply blend — white/light backgrounds in the logo will take on the paper color automatically. Let me check the current rule and apply it:

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

Let me verify against the actual dropped logo. The sidecar is shared, so my preview should show it too:

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: list_files]_

The slot shows empty in my preview — the dropped image lives in a sidecar. Let me check it's saved:

_[tool: run_script]_

_[tool: run_script]_

The logo is saved. Let me analyze its actual background so I pick the right blend approach:

_[tool: run_script]_

The logo has a solid tan background **#F7E8D6**, slightly off from the site paper **#F5EEE3** — that's the pasted-on look. I'll knock out that background to transparent so it sits seamlessly on the paper. Let me first check the logo's artwork colors to set a safe tolerance:

_[tool: run_script]_

The artwork is green/brown — far from the tan background, so a clean knockout is safe. I'll make the logo's background transparent (with soft edges) and save it back, plus clean up the dead gallery slots:

_[tool: run_script]_

The shrink guard fired because removing the dead slots halved the file. I'll keep those (they're harmless) and only update the logo:Now revert the blend-mode (no longer needed with a transparent logo) and verify:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

Scrolled past it. Let me reposition precisely and confirm the logo loaded:

_[tool: save_screenshot]_

court

_[tool: view_image]_

_[tool: eval_js]_

_[tool: run_script]_

Let me verify the knockout result directly by compositing the processed logo over the paper color:

_[tool: view_image]_

_[tool: done]_

The knockout is clean — the "gēn house" logo (green lettering + the figure in the polka-dot shirt) now sits on a fully transparent background, so it blends seamlessly into the site paper with no tan box. The earlier blank previews were just a capture limitation with the embedded image; the logo itself renders correctly.

Finalizing.完成 ✅

把你拖進去的 Logo 原本那層**米黃色底(#F7E8D6)去掉、改成透明**,並做了柔邊處理避免鋸齒。現在 Logo 直接印在網站米白底上、完全融入,不再有「貼一張圖上去」的方塊感。日後想換 Logo 時,如果新圖也帶底色再跟我說,我可以再幫你去背。

## User

Apply comment

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: str_replace_edit]_

The year photos use a cropping fill — I'll switch them to show the whole photo centered (contain), framed on the sand background so it reads as intentional rather than a bad crop:

_[tool: grep]_

Now refine the banner framing in CSS:

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: run_script]_

Let me preview how the user's actual dropped year photo will look with the new centered/contain framing:

_[tool: view_image]_

_[tool: done]_

The dropped photo (a 誠品 eslite gēn house signage shot, 4:3) now displays **fully and centered** on a soft mat instead of being cropped — exactly the centered look you wanted. The empty preview in my own view is just a capture limitation; the composite confirms the real rendering.

Finalizing.

_[tool: fork_verifier_agent]_

完成 ✅

把「創辦旅程」四張年度照片從**裁切填滿**改成**完整置中顯示**(contain),照片放進去會整張置中、不被切到,背景改用低調的米色襯底框住,看起來像刻意裱框的照片而不是硬塞進去。四張卡片(門市／櫃位／Rebranding／廠房)都套用同樣處理。

照片若想再放大一點、或某張想改成滿版裁切,跟我說即可。

## User

好醜... 有沒有辦法把旁邊這些顏色不依的拿掉，就單純用照片就好，不用設定尺寸框架住

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Got it — the contain mode shows mismatched side colors. I'll make the photo fill the banner edge-to-edge (cover) with no colored frame at all. Reverting the 4 slots and cleaning the CSS:

_[tool: str_replace_edit]_

_[tool: run_script]_

Let me preview the actual photo in edge-to-edge (cover) mode:

_[tool: view_image]_

_[tool: done]_

Now the photo fills the banner edge-to-edge — no side colors, no mat, just the photo itself. The 誠品 gēn house signage and cake read clearly. (You can double-click any photo to nudge the crop if needed.)court

_[tool: fork_verifier_agent]_

完成 ✅ 拿掉了照片旁邊的米色襯底框,改成**照片直接滿版填滿**banner,沒有任何顏色邊框,就是純粹的照片。如果某張照片想調整露出的範圍,在框內**雙擊**就能拖曳/縮放重新取景。

## User

共同創辦人拿掉，另外是照片把右邊空下來的底色填滿

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

"共同創辦人" removal is straightforward. For the photo gap, let me check how the image-slot handles fit/reframe so I fix the root cause:

_[tool: read_file]_

_[tool: str_replace_edit]_

Found the real bug: the inline `width:100%` on each slot **overrides** my CSS `width:calc(100% + 72px)`, so the banner is too narrow and shifted left by the negative margins — leaving that right-side gap. I'll drop the inline width so the CSS full-bleed width wins, and remove "共同創辦人":

_[tool: show_html]_

The custom element display is `block` and CSS width now wins. Let me verify the slot is now full-bleed (clientWidth = card width, no gap):

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: run_script]_

The slot is now full-bleed (478 vs card 480, ~1px each side) — the right gap is fixed. Let me confirm the actual photo crop looks good at the corrected full-width:

_[tool: view_image]_

_[tool: done]_

Both fixed:
1. **「共同創辦人」removed** — the line now reads 根號拾 Gēn House ｜ 品牌負責人.
2. **Photo gap fixed** — the inline width was overriding the full-bleed CSS, leaving that right-side empty strip. The photo now fills the banner edge-to-edge.

_[tool: fork_verifier_agent]_

完成 ✅

1. 抬頭改成「**根號拾 Gēn House ｜ 品牌負責人**」,拿掉了共同創辦人。
2. 修好照片右側那條空白 —— 原本是內嵌的寬度設定壓過了滿版設定,現在照片**完整填滿整條 banner**,沒有空底色了。四張卡片都一併修正。

## User

Apply comment

## Assistant

_[tool: snip]_

_[tool: run_script]_

The photo is getting cropped because the banner is short. I'll make it taller so the photo shows more fully. Let me preview a taller banner to pick the right height:

_[tool: run_script]_

The photo is now a **portrait** (746×994) — you must have swapped it. A portrait in a wide short banner gets badly cropped. The cleanest fix: show the whole photo centered on the card's own paper color (no mismatched mat, nothing cut) and make the area taller. Let me preview this:

_[tool: view_image]_

_[tool: str_replace_edit]_

The portrait photo shows fully but with big empty sides. Better to give the photo area itself a **portrait shape** (as you suggested) — a centered 3:4 frame that the portrait photo fills perfectly with no crop and no empty sides. Let me restructure the banner:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

`aspect-ratio` isn't taking on the component (height collapsed to 160). Let me set an explicit height instead:

_[tool: show_html]_

_[tool: eval_js]_

_[tool: run_script]_

Now 260×347 (3:4) — the portrait photo fills it perfectly with virtually no crop. Let me confirm the final result:

_[tool: view_image]_

_[tool: done]_

Perfect — 0% crop on both axes. The portrait storefront photo now fills a clean centered 3:4 portrait frame with nothing cut off, exactly as you wanted. When you drop photos into the other three cards they'll fill the same portrait frame (double-click to nudge the crop if a photo is landscape).

Finalizing.court

_[tool: fork_verifier_agent]_

完成 ✅ 把「創辦旅程」的照片框改成**直式 3:4 肖像比例**(置中),你那張直拍的門市照現在**完整填滿、零裁切**,不再被切到。其餘三張卡片是相同的直式框,放入照片就會自動填滿;若放的是橫式照片,在框內**雙擊**即可拖曳選取要露出的範圍。

## User

然後有照片的地方都幫我改成可以調整照片上下左右的功能，不然都被柴切

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: grep]_

The year photos already support drag-to-reframe (double-click). The home portrait is a static image — let me convert it to an adjustable slot too. First let me confirm how the component handles a `src` image for reframing:

_[tool: str_replace_edit]_

A `src` image sets `data-filled`, so double-click reframe works and the crop persists. I'll convert the home portrait to an adjustable slot:

_[tool: show_html]_

_[tool: eval_js]_

_[tool: read_file]_

All photo areas are now adjustable (home portrait + 4 journey photos use cover/reframe). Let me confirm the reframe controls are reachable given the containers clip overflow — checking how reframe is entered/exited:

_[tool: str_replace_edit]_

The reframe is toggled by double-click (enter → drag to pan, corner-drag to zoom → double-click to save). It works even now, but the containers' `overflow:hidden` clips the translucent "spill" preview during reframe. I'll let the slot handle its own rounding so the preview shows fully. Updating the slots and CSS:

_[tool: str_replace_edit]_

Now remove the container `overflow:hidden` so the reframe preview shows:

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: done]_

All photo areas now support drag-to-adjust. Verified: double-click enters reframe, drag to pan, corner-drag to zoom, double-click again to save — works on the home portrait and confirmed on the journey photos.

_[tool: fork_verifier_agent]_

完成 ✅ 現在**所有放照片的地方**(首頁個人照 + 創辦旅程四張照片)都可以調整位置了,不會被硬切。

**操作方式**:
1. 在照片上**雙擊**進入調整模式
2. **拖曳**移動照片(上下左右)
3. **拉四角**縮放
4. 再**雙擊**儲存

調整後的取景會自動記住。

_[tool: read_file]_

Got it — only card 01 is portrait; cards 02–04 are landscape and should go back to the full-bleed wide banner. Let me set up two photo styles. First, read the current CSS:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

Exactly what I just set up — 01 stays portrait, 02–04 go back to the landscape full-bleed banner. Let me verify:

_[tool: eval_js]_

_[tool: done]_

Confirmed:
- **01** → portrait 3:4 frame (260×347, centered) ✓
- **02–04** → landscape full-bleed banner (edge-to-edge, ~1px gaps) ✓

All still drag-adjustable. Finalizing.court

_[tool: fork_verifier_agent]_

完成 ✅ 創辦旅程現在:
- **01** 保留直式肖像框(置中、完整不裁切)
- **02 / 03 / 04** 回到橫向滿版 banner(照片邊到邊填滿)

四張都還是可雙擊拖曳調整位置。02–04 放入橫向照片後會自動填滿整條 banner。

## User

我覺得234可以保留原本照片的大小欸

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

To keep cards 02–04 photos at their full original proportions (no cropping), I'll switch them to show the whole photo on the card's own paper tone (so no mismatched mat) and give the banner more height. Updating CSS and the three slots:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: save_screenshot]_

- **01**: portrait 3:4, adjustable (cover) ✓
- **02–04**: wide 478×300, **contain** — the full landscape photo shows at its real proportions with no cropping, on the card's paper tone (no mismatched mat) ✓

Let me do a quick visual check of the journey layout:

_[tool: view_image]_

_[tool: done]_

Verified via measurement that the layout is correct (01 portrait 260×347 cover; 02–04 wide 478×300 contain). The blank capture is just the scroll/shadow-image preview limitation, not a real issue.完成 ✅ 創辦旅程現在:

- **01** — 直式肖像框,可雙擊拖曳調整
- **02 / 03 / 04** — 橫向框改為**保留照片原始比例完整顯示**(不裁切),襯底用卡片本身的米色所以看不到色差

放入橫向照片時會完整呈現、不會被切到。如果某張想改回滿版裁切,跟我說即可。

