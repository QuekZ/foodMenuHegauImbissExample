This is a simple Food Menu made with React and Vite. 

Its displayed on a Big Monitor. It acceses the Website via the Projection with a raspberry PI3. 

The Raspberry PI3 is running an autostart script that first starts the vite project with 'npx serve dist -l 5000' 
then the chromium-browser is started with 'http://localhost:5000' to launch the menu. Chromium is running in kiosk mode and the whole application can just be stopped by using the terminal

The Food List was a bit long so i wrote an intervall function to let the pages change every few seconds.

Disclaimer:This is just an example and is showing the basic structure but the actual live version is in a private repo with a bit more functionality and a better structure.

![imbissMenu](https://github.com/user-attachments/assets/d8ace012-5bcc-4a61-9bdb-a247a7cbb474)

![imbissMenu2](https://github.com/user-attachments/assets/b5a562f4-c139-4343-befb-81eec18fd818)

![image](https://github.com/user-attachments/assets/e1d12a1e-dc53-4b69-a021-b6280b4adcf0)



![Bild](https://github.com/user-attachments/assets/0b48d504-0ee8-4c18-929c-52cf9e4d41b3)

