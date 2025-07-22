# Intuitive Movement - Website Project

A clean, modern placeholder website for Tony's Intuitive Movement natural fitness coaching business in Castle Rock, Colorado.

## About This Project

This website was created as a simple, elegant placeholder for Intuitive Movement, showcasing Tony's natural movement coaching services. The site emphasizes the warm, approachable, and holistic brand positioning while highlighting the key differentiator of working WITH the body's natural design.

### Business Overview
- **Service**: Natural movement practices and fitness coaching
- **Owner**: Tony
- **Location**: Castle Rock, Colorado (Denver metro area)
- **Target Audience**: All fitness levels, from beginners with movement pain to athletes
- **Service Format**: One-on-one, in-person coaching

## Website Features

### ✨ Modern Design
- Clean, wellness-focused design with natural color palette
- Responsive layout that works on all devices
- Smooth animations and interactive elements
- Professional typography using Poppins font
- Consistent FontAwesome icons that display perfectly across all devices

### 📱 Mobile-First Approach
- Fully responsive design
- Mobile navigation menu
- Touch-friendly interactive elements
- Optimized for all screen sizes

### 🎯 Content Sections
1. **Hero Section** - Main value proposition and call-to-action
2. **About & Approach** - Tony's philosophy and methodology
3. **Who Can Benefit** - Target audience breakdown
4. **Benefits & Outcomes** - Key results clients can expect
5. **Contact Section** - Easy ways to get in touch

### 🔧 Functionality
- Smooth scrolling navigation
- Interactive contact form with email integration
- Animated elements that appear on scroll
- Mobile-friendly hamburger menu
- Professional email link generation

## File Structure

```
intuitive-movement/
├── web/                    # Website files
│   ├── index.html         # Main HTML file
│   ├── styles.css         # All styling and design
│   └── script.js          # Interactive functionality
├── .cursor/
│   └── docs/
│       └── project-brief.md # Business requirements document
└── README.md              # This documentation file
```

## How to View the Website

### Option 1: Open Locally (Simplest)
1. Navigate to the `web` folder
2. Double-click on `index.html`
3. The website will open in your default web browser

### Option 2: Use Live Server (Recommended for development)
If you have VS Code or another code editor:
1. Install a "Live Server" extension
2. Right-click on `index.html` in the `web` folder
3. Select "Open with Live Server"
4. The website will open with auto-refresh capabilities

### Option 3: Static Hosting (For going live)
The website is ready to deploy to any static hosting service:
- **Static.run** (as mentioned in project brief)
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

Simply upload the contents of the `web` folder to your hosting provider.

## Customization Guide

### Updating Content
All content can be edited in `web/index.html`:
- **Business name**: Search for "Intuitive Movement" to find all instances
- **Contact email**: Update `tony@intuitivemovement.biz` throughout the file
- **Phone number**: Add phone contact if desired
- **Service area**: Update "Castle Rock, CO" references as needed
- **Testimonials**: Replace the placeholder quote with real client feedback

### Design Changes
Colors and styling can be modified in `web/style.css`:
- **Color palette**: Defined in CSS variables at the top of the file
- **Fonts**: Currently using Poppins, can be changed in the font import
- **Icons**: Using FontAwesome 6 - can be changed by updating the class names in HTML
- **Spacing**: Adjust section padding and margins
- **Layout**: Modify grid and flexbox properties

### Adding Features
The `web/script.js` file contains all interactive functionality:
- Contact form behavior
- Navigation smoothness
- Mobile menu functionality
- Scroll animations

## Email Integration

The contact form is set up to work with the user's default email client:
- When someone fills out the form, it opens their email program
- The form data is automatically formatted into a professional email
- The email is addressed to `tony@intuitivemovement.biz`
- Subject line includes the sender's name for easy identification

## Browser Compatibility

The website works on all modern browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Fast Loading**: Minimal dependencies, optimized images
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Responsive Images**: Scales appropriately for different screen sizes
- **Clean Code**: Well-organized, commented code for easy maintenance

## Technical Details

### Technologies Used
- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No external dependencies
- **Google Fonts**: Poppins typeface for warm, professional typography
- **FontAwesome**: Professional icon library for consistent visual elements

### SEO & Accessibility Optimized
- Semantic HTML structure
- Meta tags for search engines
- Descriptive alt texts (when images are added)
- Clean URL structure
- Fast loading times
- WCAG AA compliant color contrast ratios
- Keyboard navigation support
- Screen reader friendly

## Next Steps

### For Immediate Use
1. Review the content and make any necessary updates
2. Test the contact form functionality
3. Upload to your chosen hosting provider

### For Future Enhancement
- Add professional photos of Tony and movement demonstrations
- Include client testimonials and success stories
- Add a blog section for movement tips and insights
- Integrate with social media platforms
- Add online booking system if desired

## Support

For any questions about this website or future modifications, refer to:
- The project brief in `.cursor/docs/project-brief.md`
- This README file
- The code comments in each file for technical details

## Hosting Recommendations

Based on the project brief mentioning Static.run, here are hosting options:

1. **Static.run** - Free static hosting
2. **GitHub Pages** - Free, integrates with version control
3. **Netlify** - Free tier with easy deployment
4. **Vercel** - Fast, modern hosting platform

All of these services work perfectly with this simple HTML/CSS/JS website.

## Troubleshooting

### CSS Not Loading (MIME Type Error)
If you see an error like "Refused to apply style... MIME type 'application/xml' is not supported":

**For Static.run (Current Setup):**
- ✅ **Fixed**: CSS file renamed from `style.css` to `styles.css`
- ✅ **HTML Updated**: Now references `styles.css` instead of `style.css`
- Upload the new files and the styling should work correctly

**For Other Hosting Providers:**
- **Netlify/Vercel**: Should work automatically with either filename
- **GitHub Pages**: Should work automatically  
- **cPanel/shared hosting**: May need server configuration

**If Issues Persist:**
1. Clear your browser cache completely
2. Try uploading through the hosting provider's file manager instead of FTP
3. Check that the file uploaded successfully and isn't corrupted
4. Verify the CSS file URL loads directly in the browser

### Contact Form Not Working
- The form opens the user's default email client
- If this doesn't work, they can manually email `tony@intuitivemovement.biz`
- For a server-side contact form, you'll need backend processing

### Mobile Menu Not Responding
- Check that JavaScript is enabled in the browser
- Ensure `script.js` is loading without errors in the browser console

---

**Created**: July 22, 2025  
**Business**: Intuitive Movement  
**Owner**: Tony  
**Location**: Castle Rock, Colorado  
**Contact**: tony@intuitivemovement.biz 
