# Deployment Guide - Wisdom in Data Platform

This guide provides step-by-step instructions for deploying the Wisdom in Data platform website to GitHub Pages.

## 🚀 Quick Start (GitHub Pages)

### Option 1: Fork and Deploy (Recommended)

1. **Fork the Repository**
   - Go to the repository URL
   - Click the "Fork" button in the top-right corner
   - This creates a copy in your GitHub account

2. **Enable GitHub Pages**
   - Go to your forked repository
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" or "master" branch
   - Select "/ (root)" folder
   - Click "Save"

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/wisdom-in-data-platform`
   - It may take a few minutes to deploy

### Option 2: Create New Repository

1. **Create New Repository**
   - Go to GitHub and create a new repository
   - Name it `wisdom-in-data-platform`

2. **Upload Files**
   - Clone your new repository locally
   - Copy all files from this project to your repository
   - Commit and push the files

3. **Enable GitHub Pages**
   - Follow the same steps as Option 1

## 🔧 Local Development

### Prerequisites
- Git
- A modern web browser
- Optional: Local web server

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/wisdom-in-data-platform.git
   cd wisdom-in-data-platform
   ```

2. **Open in Browser**
   - Simply open `index.html` in your browser
   - Or use a local server for better experience

### Local Server Options

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (with http-server):**
```bash
npx http-server
```

**PHP:**
```bash
php -S localhost:8000
```

**Live Server (VS Code Extension):**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

## 🎨 Customization

### Update Content

1. **Edit Text Content**
   - Open `index.html` and `demo.html`
   - Modify text content as needed
   - Update contact information

2. **Change Images**
   - Replace image files in the project
   - Update image paths in HTML files
   - Recommended formats: PNG, JPG, WebP

3. **Modify Colors**
   - Edit CSS custom properties in `styles.css`
   - Update the `:root` section for theme colors

### Update Videos

1. **Replace Demo Videos**
   - Update YouTube links in `index.html` demo section
   - Update video descriptions and titles
   - Ensure videos are publicly accessible

2. **Add New Videos**
   - Upload to YouTube or other video platform
   - Update the demo section with new links
   - Add corresponding descriptions

## 📱 Mobile Optimization

The website is already optimized for mobile devices, but you can:

1. **Test Responsiveness**
   - Use browser developer tools
   - Test on actual mobile devices
   - Check different screen sizes

2. **Optimize Images**
   - Use WebP format for better compression
   - Implement lazy loading for large images
   - Optimize image sizes for mobile

## 🔍 SEO Optimization

### Meta Tags
The website includes basic SEO meta tags. You can enhance them by:

1. **Update Title and Description**
   ```html
   <title>Your Custom Title</title>
   <meta name="description" content="Your custom description">
   ```

2. **Add Open Graph Tags**
   ```html
   <meta property="og:title" content="Your Title">
   <meta property="og:description" content="Your Description">
   <meta property="og:image" content="path/to/image.jpg">
   ```

3. **Add Twitter Card Tags**
   ```html
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="Your Title">
   <meta name="twitter:description" content="Your Description">
   ```

### Analytics
Add Google Analytics by:

1. **Get Tracking ID**
   - Go to Google Analytics
   - Create a new property
   - Get your tracking ID (UA-XXXXXXXXX-X)

2. **Add to Website**
   - Add the tracking code to both HTML files
   - Place it in the `<head>` section

## 🚀 Performance Optimization

### Before Deployment

1. **Minify CSS and JS**
   - Use online minifiers or build tools
   - Compress images
   - Enable gzip compression (if available)

2. **Optimize Loading**
   - Use CDN for external libraries
   - Implement lazy loading
   - Optimize critical rendering path

### CDN Resources
The website uses CDN for:
- Bootstrap 5
- Font Awesome
- Google Fonts

## 🔒 Security Considerations

1. **HTTPS**
   - GitHub Pages automatically provides HTTPS
   - Ensure all external links use HTTPS

2. **Content Security Policy**
   - Consider adding CSP headers
   - Restrict external resource loading

3. **Input Validation**
   - The demo chat is client-side only
   - No server-side processing required

## 📊 Monitoring and Analytics

### Google Analytics Setup
1. Create Google Analytics account
2. Add tracking code to HTML files
3. Set up goals and conversions
4. Monitor traffic and user behavior

### Performance Monitoring
1. Use Google PageSpeed Insights
2. Monitor Core Web Vitals
3. Track loading times
4. Monitor mobile performance

## 🐛 Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Check file paths
   - Ensure images are in correct directory
   - Verify file permissions

2. **Styles Not Applied**
   - Check CSS file path
   - Clear browser cache
   - Verify CSS syntax

3. **JavaScript Errors**
   - Check browser console for errors
   - Verify script file paths
   - Test in different browsers

4. **Mobile Issues**
   - Test on actual devices
   - Check viewport meta tag
   - Verify responsive CSS

### Debug Mode
Add this to your HTML for debugging:
```html
<script>
console.log('Website loaded successfully');
// Add more debug information as needed
</script>
```

## 📞 Support

If you encounter issues:

1. **Check Documentation**
   - Review this deployment guide
   - Check README.md for additional information

2. **Common Solutions**
   - Clear browser cache
   - Try different browser
   - Check file permissions

3. **Contact Support**
   - Email: research@wisdomindata.com
   - GitHub Issues: Create an issue in the repository

## 🎯 Best Practices

1. **Regular Updates**
   - Keep content fresh and relevant
   - Update research results regularly
   - Maintain video links

2. **Performance**
   - Monitor loading times
   - Optimize images regularly
   - Test on multiple devices

3. **Accessibility**
   - Ensure proper alt text for images
   - Test with screen readers
   - Maintain good color contrast

4. **Backup**
   - Keep local copies of files
   - Use version control
   - Regular backups of customizations

---

**Happy Deploying!** 🚀

Your Wisdom in Data platform website should now be live and accessible to the world. 