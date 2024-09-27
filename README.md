
# AFWERX Email Signature Project

## Project Overview
This project contains various components designed to create email signatures for AFWERX. It includes several sub-folders (`alpha`, `bravo`, `charlie`, `delta`, `echo`) representing different email signature templates, along with the associated styles, scripts, and images required for display.

### Contents:
- **Sub-folders**: Each folder (alpha, bravo, charlie, delta, echo) contains HTML/CSS/JS components for different email signature designs.
- **`css/`**: Contains the stylesheets for all components.
- **`js/`**: Contains the JavaScript files that enhance functionality.
- **`img/`**: Contains images used in the email signatures.
- **`index.html`**: Main entry point to preview and render the email signatures in a browser.

## How to Use
To run this project locally, you can either open the `index.html` file directly in your browser or set up a local HTTP server for more complex interactions.

### Using a Local HTTP Server
You can use Python's built-in HTTP server to host the project:
```bash
# In the project directory
python3 -m http.server
```
Then open your browser to `http://localhost:8000` to view the signatures.

## Deployment
You can deploy this project on platforms like Netlify, Heroku, or any static hosting provider.

### Netlify Deployment
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the project folder into the Netlify dashboard, or link it directly from your GitHub repository.
3. Netlify will automatically detect and deploy the site.

### Heroku Deployment (For Basic HTML)
1. Create a new app on [Heroku](https://www.heroku.com/).
2. Push the repository to the Heroku remote and deploy.
3. Visit the URL provided by Heroku to view the signatures.

## Environment Variables
This project does not require any environment variables.

## License
This project is private and internal to `thedifferenceconsulting.com` for client use only. Unauthorized use is prohibited.

For further assistance, you can contact:
- Heather Renze (CTO, @heathriel on GitHub)
- Braulio Buccio (DevOps, @beebucio on GitHub)
