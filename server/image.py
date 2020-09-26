import sys, fitz
import os

def convert_images_to_PDF(img_dic, id):
    img_list = []
    for each in sorted(img_dic.keys()):
        img_list.append(img_dic[each])


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

def clean_cache():
    # Remove all image files
    for file in os.listdir('cache'):
        if file.endswith('.png'):
            os.remove("cache/"+file)

        if file.endswith(".pdf"):
            os.rename("cache/"+file, "media/"+file)

    # Move the pdf media to media folder



if __name__ == "__main__":
    clean_cache()