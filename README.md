# Currently Supports
- [Squad](https://reporter.syfusion.com/squad/generator)

# Features
- Dynamic Report Forms: Select from different report templates tailored to specific issues:
- Persistent Data Storage: Saves your system specifications and other common details to your browser's local storage. Fill them out once, and they'll be there the next time you visit. This data is stored locally in your browser and never is never uploaded.
- One-Click Markdown Export: Generates a clean, pre-formatted Markdown report with a single click, ready to be pasted into Discord, forums, or GitHub.
- Data Management: Easily reset the fields for your current report or clear all saved data entirely.
- Theme Support: Toggle between a comfortable light and dark mode.
- Responsive Design: Use the tool on your desktop, tablet, or mobile device.

# How to Use
- Select a Report Type: Choose the category that best fits the bug you are reporting (e.g., "Performance").
- Fill in the Details: Complete the form fields. Required fields are marked with a red asterisk (*). Tooltips (? icons) are available for fields that may need extra explanation.
- Save Your Data (Optional): Click the Save button to store your system specs and other reusable information in your browser for future reports.
- Export the Report: Once the form is complete, click the Export & Copy To Clipboard button.
- Paste and Submit: Paste the copied Markdown into the appropriate bug-reporting channel or platform.

# Technologies Used
- HTML5: The structure of the web page.
- CSS3: Custom styling and theme implementation.
- Bootstrap 5: For responsive layout and pre-styled components.
- JavaScript (Vanilla): Powers all the application logic, including form generation, data storage, and report exporting.
- Font Awesome: For icons used throughout the user interface.

# Structure & Dev
- Code is stored in each generator separately, with their own images and assets. 
- Code is structured so most of the forms are populated by the "FORM CONFIGURATION" data at the top of the javascript files stored in each directory. Some bespoke code handles niche stuff and the exporting, it's on-going to try to make everything modular and part of "FORM CONFIGURATION" when I have time.
- When updating, it's highly suggested to tick up "const appVersion = "1.3" in each javascript file, this will clear any previous existing cache to prevent edge cases.
- Clearing cache effects entire domain and its storage, plan

# WIP (Still Working On)
- Rewrite resolution/display type.
- The default button states none.
- Add images/animated gifs examples on how to find what is being asked.
- Clearing cache affects the entire FQDN (domain) currently and its cache/storage, I plan to rewrite this to limit scope, unless when necessary (e.g breaking version update) so it can work on websites with unrelated storage and cache.
- Any feedback on things to be changed, fixed, added or removed is appreciated :)
