import sys, fitz

def convertImagesToPDF(img_dic, id):
    img_list = []
    for each in sorted(img_dic.keys()):
        img_list.append(img_dict[each])


    doc = fitz.open()  # PDF with the pictures
    for i, f in enumerate(img_list):
        img = fitz.open(f)  # open pic as document
        rect = img[0].rect  # pic dimension
        pdfbytes = img.convertToPDF()  # make a PDF stream
        img.close()  # no longer needed
        imgPDF = fitz.open("pdf", pdfbytes)  # open stream as PDF
        page = doc.newPage(width=rect.width,  # new page with ...
                           height=rect.height)  # pic dimension
        page.showPDFpage(rect, imgPDF, 0)
        # image fills the page
    doc.save("cache/"+str(id)+".pdf")




if __name__ == "__main__":
    img_dict = {0:"cache/sample.png",
                1:"cache/sample2.png",}
    id = 1111
    convertImagesToPDF(img_dict,id)