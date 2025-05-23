import cv2
import numpy as np

# Load the image
image = cv2.imread('input.jpg')
if image is None:
    raise FileNotFoundError("input.jpg not found in the current directory.")

# Create a mask (same size as image, single channel)
mask = np.zeros(image.shape[:2], dtype=np.uint8)

# Instructions for the user
print("Draw over the red wallet area with your mouse. Press 's' to save the mask and continue, or 'q' to quit.")

drawing = False
ix, iy = -1, -1

def draw_mask(event, x, y, flags, param):
    global drawing, ix, iy
    if event == cv2.EVENT_LBUTTONDOWN:
        drawing = True
        ix, iy = x, y
    elif event == cv2.EVENT_MOUSEMOVE:
        if drawing:
            cv2.line(mask, (ix, iy), (x, y), 255, 20)
            cv2.line(image_display, (ix, iy), (x, y), (0, 255, 0), 20)
            ix, iy = x, y
    elif event == cv2.EVENT_LBUTTONUP:
        drawing = False

image_display = image.copy()
cv2.namedWindow('image')
cv2.setMouseCallback('image', draw_mask)

while True:
    cv2.imshow('image', image_display)
    k = cv2.waitKey(1) & 0xFF
    if k == ord('s'):
        break
    elif k == ord('q'):
        cv2.destroyAllWindows()
        exit()

cv2.destroyAllWindows()

# Inpaint the masked area
output = cv2.inpaint(image, mask, 3, cv2.INPAINT_TELEA)

# Save and show the result
cv2.imwrite('output.jpg', output)
cv2.imshow('result', output)
cv2.waitKey(0)
cv2.destroyAllWindows()

print("Done! The edited image is saved as output.jpg.") 