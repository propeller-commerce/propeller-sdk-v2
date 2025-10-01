#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔨 Building comprehensive documentation with proper src/* folder navigation...');

// Step 1: Clean existing documentation
console.log('🧹 Cleaning existing documentation...');
try {
  execSync('npm run docs:clean', { stdio: 'inherit' });
} catch (error) {
  // Directory might not exist, continue
}

// Step 2: Generate TypeDoc documentation
console.log('📚 Generating TypeDoc documentation...');
try {
  execSync('npx typedoc', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Failed to generate TypeDoc documentation:', error.message);
  process.exit(1);
}

// Step 3: Post-process the generated documentation
console.log('📝 Post-processing documentation for proper src/* folder navigation...');

const docsDir = path.join(process.cwd(), 'documentation');

if (!fs.existsSync(docsDir)) {
  console.error('❌ Documentation directory not found!');
  process.exit(1);
}

// Create .nojekyll file to bypass Jekyll processing (important for GitHub Pages)
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');

// Create comprehensive README for the docs directory
const docsReadme = `# Propeller v2 SDK Documentation

This directory contains the complete API documentation for the Propeller v2 GraphQL TypeScript SDK.

## 📚 Documentation Structure

- **[Client](./classes/GraphQLClient.html)** - GraphQL client implementation
- **[Services](./classes/)** - Service layer classes for API operations
- **[Types](./interfaces/)** - TypeScript interfaces and type definitions
- **[Enums](./enums/)** - Enumeration types from the GraphQL schema

## 🚀 Quick Start

Visit the [main documentation page](./index.html) to get started.

## 🔗 Navigation

- Use the sidebar navigation to browse different modules
- Search functionality is available in the top navigation
- All types are cross-referenced with clickable links

## 📖 Generated with TypeDoc

This documentation is automatically generated from TypeScript source code using TypeDoc.
`;

fs.writeFileSync(path.join(docsDir, 'README.md'), docsReadme);

// ENHANCED navigation fix script with BEAUTIFUL compact styling and better right sidebar
const fixNavigationScript = `
<script>
(function() {
  'use strict';
  
  // Wait for DOM to be fully loaded
  function waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      
      const observer = new MutationObserver((mutations) => {
        const element = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      setTimeout(() => {
        observer.disconnect();
        reject(new Error('Element not found within timeout'));
      }, timeout);
    });
  }
  
  async function completelyRebuildNavigation() {
    console.log('🔧 AGGRESSIVELY rebuilding left sidebar navigation with BEAUTIFUL styling...');
    
    try {
      // Wait for the sidebar to be available
      const sidebar = await waitForElement('.tsd-sidebar');
      const sidebarNav = await waitForElement('.tsd-sidebar .tsd-navigation');
      
      console.log('✅ Found sidebar elements, rebuilding navigation with beautiful styling...');
      
      // STEP 1: REMOVE SETTINGS BUTTONS
      const settingsElements = document.querySelectorAll('.tsd-toolbar-icon, button[title="Settings"], button[aria-label="Settings"], .settings, .tsd-toolbar-contents .settings');
      settingsElements.forEach(el => el.style.display = 'none');
      
      // STEP 2: COMPLETELY REPLACE THE NAVIGATION DOM WITH BEAUTIFUL STYLING
      const newNav = document.createElement('nav');
      newNav.className = 'tsd-navigation';
      newNav.style.cssText = 'padding:0;height:100%;overflow:visible;';
      
      const newUl = document.createElement('ul');
      newUl.style.cssText = 'list-style:none;padding:0;margin:0;';
      
      // Define the EXACT structure you want
      const folderStructure = [
        {
          name: 'Namespaces',
          icon: '📁',
          items: [
            { name: 'Enums', href: './enums/', type: 'folder' },
            { name: 'Types', href: './interfaces/', type: 'folder' }
          ]
        },
        {
          name: 'Services',
          icon: '⚙️',
          items: [
            'UserService', 'ProductService', 'OrderService', 'CartService', 'InventoryService',
            'SiteService', 'ClusterService', 'GCIPUserService', 'LogoutService', 'VerifyTokenService',
            'ShopService', 'CategoryService', 'DiscountService', 'PriceService', 'ShipmentService',
            'TaxService', 'CompanyService', 'ContactService', 'CustomerService', 'AddressService',
            'PaymentService', 'NotificationService', 'TemplateService', 'UploadService', 'SearchService'
          ].map(serviceName => ({
            name: serviceName,
            href: \`./classes/\${serviceName}.html\`,
            type: 'class'
          }))
        },
        {
          name: 'Interfaces',
          icon: '📋',
          items: [
            { name: 'GraphQLClient', href: './classes/GraphQLClient.html', type: 'class' }
          ]
        },
        {
          name: 'Enums',
          icon: '🔢',
          href: './enums/',
          type: 'folder'
        },
        {
          name: 'Variables',
          icon: '📝',
          href: './variables/',
          type: 'folder'
        },
        {
          name: 'Functions',
          icon: '🔧',
          href: './functions/',
          type: 'folder'
        }
      ];
      
      // Build the navigation with ULTRA-MINIMAL spacing and BEAUTIFUL styling
      folderStructure.forEach((section) => {
        const li = document.createElement('li');
        li.style.cssText = 'margin:0;padding:0;border:none;';
        
        if (section.items && section.items.length > 0) {
          // Create expandable folder with BEAUTIFUL styling
          const folderHeader = document.createElement('div');
          folderHeader.style.cssText = 'display:flex;align-items:center;cursor:pointer;padding:2px 4px;border-radius:2px;background:transparent;margin:0;border:none;transition:all 0.2s ease;';
          
          const folderIcon = document.createElement('span');
          folderIcon.textContent = section.icon;
          folderIcon.style.cssText = 'margin-right:4px;font-size:11px;';
          folderHeader.appendChild(folderIcon);
          
          const folderName = document.createElement('span');
          folderName.textContent = section.name;
          folderName.style.cssText = 'font-weight:600;color:var(--color-text);font-size:11px;';
          folderHeader.appendChild(folderName);
          
          const expandIcon = document.createElement('span');
          expandIcon.textContent = '▼';
          expandIcon.style.cssText = 'margin-left:auto;font-size:8px;color:var(--color-text-light);transition:transform 0.2s ease;';
          folderHeader.appendChild(expandIcon);
          
          li.appendChild(folderHeader);
          
          // Create items list with ULTRA-MINIMAL spacing
          const itemsUl = document.createElement('ul');
          itemsUl.style.cssText = 'list-style:none;padding:0;margin:0;padding-left:6px;border:none;';
          
          section.items.forEach((item) => {
            const itemLi = document.createElement('li');
            itemLi.style.cssText = 'margin:0;padding:0;border:none;';
            
            const itemLink = document.createElement('a');
            itemLink.href = item.href;
            itemLink.textContent = item.name;
            itemLink.style.cssText = 'color:var(--color-text);text-decoration:none;font-size:10px;padding:1px 2px;border-radius:1px;display:block;transition:all 0.2s ease;margin:0;border:none;';
            
            itemLink.addEventListener('mouseover', () => {
              itemLink.style.backgroundColor = 'var(--color-background-secondary)';
              itemLink.style.color = 'var(--color-primary)';
            });
            
            itemLink.addEventListener('mouseout', () => {
              itemLink.style.backgroundColor = 'transparent';
              itemLink.style.color = 'var(--color-text)';
            });
            
            itemLi.appendChild(itemLink);
            itemsUl.appendChild(itemLi);
          });
          
          li.appendChild(itemsUl);
          
          // Toggle folder expansion
          folderHeader.addEventListener('click', () => {
            const isExpanded = itemsUl.style.display !== 'none';
            itemsUl.style.display = isExpanded ? 'none' : 'block';
            expandIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
          });
          
          // Start expanded
          itemsUl.style.display = 'block';
          expandIcon.style.transform = 'rotate(180deg)';
          
        } else if (section.href) {
          // Create simple folder link with BEAUTIFUL styling
          const a = document.createElement('a');
          a.href = section.href;
          a.innerHTML = section.icon + ' ' + section.name;
          a.style.cssText = 'color:var(--color-text);text-decoration:none;font-size:11px;padding:2px 4px;border-radius:2px;display:block;transition:all 0.2s ease;font-weight:500;border:none;margin:0;';
          
          // Add hover effects
          a.addEventListener('mouseover', () => {
            a.style.backgroundColor = 'var(--color-background-secondary)';
            a.style.color = 'var(--color-primary)';
          });
          
          a.addEventListener('mouseout', () => {
            a.style.backgroundColor = 'transparent';
            a.style.color = 'var(--color-text)';
          });
          
          li.appendChild(a);
        }
        
        newUl.appendChild(li);
      });
      
      newNav.appendChild(newUl);
      
      // COMPLETELY REPLACE the old navigation
      sidebarNav.innerHTML = '';
      sidebarNav.appendChild(newNav);
      
      console.log('✅ Navigation DOM completely replaced with beautiful styling!');
      
      // STEP 3: ENHANCED RIGHT SIDEBAR WITH BETTER CONTENT DETECTION
      const rightSidebar = document.querySelector('.tsd-page-navigation');
      if (rightSidebar) {
        rightSidebar.style.cssText = 'position:fixed!important;top:60px!important;right:0!important;width:280px!important;height:calc(100vh - 60px)!important;background:var(--color-background)!important;border-left:1px solid var(--color-border)!important;overflow-y:auto!important;padding:16px!important;z-index:50!important;';
        
        // Clean up and reorganize the right sidebar content
        rightSidebar.innerHTML = '';
        
        // Create beautiful "On This Page" section
        const onThisPage = document.createElement('div');
        onThisPage.className = 'on-this-page';
        onThisPage.style.cssText = 'margin-bottom:20px;';
        
        const title = document.createElement('h4');
        title.textContent = 'On This Page';
        title.style.cssText = 'margin:0 0 16px 0;font-size:14px;font-weight:600;color:var(--color-text);border-bottom:1px solid var(--color-border);padding-bottom:8px;';
        onThisPage.appendChild(title);
        
        // ENHANCED table of contents generation
        const headings = document.querySelectorAll('.tsd-content h1, .tsd-content h2, .tsd-content h3, .tsd-content h4');
        if (headings.length > 0) {
          const nav = document.createElement('nav');
          const ul = document.createElement('ul');
          ul.style.cssText = 'list-style:none;padding:0;margin:0;';
          
          headings.forEach((heading, index) => {
            if (!heading.id) heading.id = 'heading-' + index;
            
            const li = document.createElement('li');
            li.style.margin = '2px 0';
            
            const a = document.createElement('a');
            a.href = '#' + heading.id;
            a.textContent = heading.textContent.trim();
            a.style.cssText = 'color:var(--color-text-light);text-decoration:none;font-size:12px;padding:2px 4px;border-radius:2px;display:block;transition:all 0.2s ease;cursor:pointer;';
            
            a.addEventListener('click', function(e) {
              e.preventDefault();
              const targetElement = document.getElementById(heading.id);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            });
            
            a.addEventListener('mouseover', () => {
              a.style.color = 'var(--color-primary)';
              a.style.backgroundColor = 'rgba(3, 102, 214, 0.05)';
            });
            
            a.addEventListener('mouseout', () => {
              a.style.color = 'var(--color-text-light)';
              a.style.backgroundColor = 'transparent';
            });
            
            li.appendChild(a);
            ul.appendChild(li);
          });
          
          nav.appendChild(ul);
          onThisPage.appendChild(nav);
        }
        
        rightSidebar.appendChild(onThisPage);
        
        // ENHANCED Current Page Content section
        const currentPageSection = document.createElement('div');
        currentPageSection.className = 'current-page-content';
        currentPageSection.style.cssText = 'margin-top:20px;';
        
        const currentPageTitle = document.createElement('h4');
        currentPageTitle.textContent = 'Current Page';
        currentPageTitle.style.cssText = 'margin:0 0 16px 0;font-size:14px;font-weight:600;color:var(--color-text);border-bottom:1px solid var(--color-border);padding-bottom:8px;';
        currentPageSection.appendChild(currentPageTitle);
        
        // Get current page title
        const pageTitle = document.querySelector('.tsd-page-title h1');
        if (pageTitle) {
          const titleDiv = document.createElement('div');
          titleDiv.textContent = pageTitle.textContent;
          titleDiv.style.cssText = 'font-size:12px;color:var(--color-text);margin-bottom:12px;padding:6px;background:var(--color-background-secondary);border-radius:3px;';
          currentPageSection.appendChild(titleDiv);
        }
        
        // ENHANCED content detection for all object types
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'font-size:11px;color:var(--color-text-light);line-height:1.3;';
        
        // Get main content area and extract ALL relevant information
        const mainContent = document.querySelector('.tsd-content');
        if (mainContent) {
          // Extract panels, signatures, descriptions, etc.
          const panels = mainContent.querySelectorAll('.tsd-panel');
          const signatures = mainContent.querySelectorAll('.tsd-signature');
          const descriptions = mainContent.querySelectorAll('.tsd-description');
          const properties = mainContent.querySelectorAll('.tsd-property');
          const methods = mainContent.querySelectorAll('.tsd-method');
          
          let contentItems = [];
          
          // Add panels
          panels.forEach((panel, index) => {
            if (index < 5) { // Limit to avoid clutter
              const panelTitle = panel.querySelector('h3, h4, .tsd-panel-group');
              if (panelTitle) {
                const titleText = panelTitle.textContent.trim();
                if (titleText && titleText.length < 60) {
                  contentItems.push({ text: titleText, type: 'panel' });
                }
              }
            }
          });
          
          // Add signatures
          signatures.forEach((sig, index) => {
            if (index < 3) {
              const sigText = sig.textContent.trim();
              if (sigText && sigText.length < 80) {
                contentItems.push({ text: sigText, type: 'signature' });
              }
            }
          });
          
          // Add properties
          properties.forEach((prop, index) => {
            if (index < 4) {
              const propName = prop.querySelector('.tsd-property-name');
              if (propName) {
                const nameText = propName.textContent.trim();
                if (nameText && nameText.length < 40) {
                  contentItems.push({ text: nameText, type: 'property' });
                }
              }
            }
          });
          
          // Add methods
          methods.forEach((method, index) => {
            if (index < 3) {
              const methodName = method.querySelector('.tsd-method-name');
              if (methodName) {
                const nameText = methodName.textContent.trim();
                if (nameText && nameText.length < 40) {
                  contentItems.push({ text: nameText, type: 'method' });
                }
              }
            }
          });
          
          // Display content items with proper styling
          contentItems.forEach((item) => {
            const itemDiv = document.createElement('div');
            itemDiv.style.cssText = 'margin:4px 0;padding:4px 6px;background:var(--color-background-secondary);border-radius:2px;font-size:10px;';
            
            // Add type indicator
            const typeSpan = document.createElement('span');
            typeSpan.textContent = item.type.charAt(0).toUpperCase() + item.type.slice(1) + ': ';
            typeSpan.style.cssText = 'font-weight:600;color:var(--color-primary);margin-right:4px;';
            itemDiv.appendChild(typeSpan);
            
            const textSpan = document.createElement('span');
            textSpan.textContent = item.text;
            textSpan.style.cssText = 'color:var(--color-text);';
            itemDiv.appendChild(textSpan);
            
            contentDiv.appendChild(itemDiv);
          });
        }
        
        currentPageSection.appendChild(contentDiv);
        rightSidebar.appendChild(currentPageSection);
      }
      
      // STEP 4: REMOVE TYPEDOC FOOTER
      const footer = document.querySelector('.tsd-generator');
      if (footer) {
        footer.style.display = 'none';
      }
      
      console.log('✅ Left sidebar completely rebuilt with beautiful styling and enhanced right sidebar!');
      
    } catch (error) {
      console.error('❌ Error rebuilding navigation:', error);
    }
  }
  
  // Run the navigation rebuild
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', completelyRebuildNavigation);
  } else {
    completelyRebuildNavigation();
  }
  
  // Also run on navigation changes
  window.addEventListener('popstate', completelyRebuildNavigation);
  
})();
</script>
`;

// Add the script to all HTML files
const htmlFiles = fs.readdirSync(docsDir).filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add the script before closing body tag
  content = content.replace('</body>', fixNavigationScript + '</body>');
  
  fs.writeFileSync(filePath, content);
});

// Also add to subdirectory HTML files
const subdirs = ['classes', 'interfaces', 'enums', 'modules', 'types', 'variables', 'functions'];
subdirs.forEach(subdir => {
  const subdirPath = path.join(docsDir, subdir);
  if (fs.existsSync(subdirPath)) {
    const subHtmlFiles = fs.readdirSync(subdirPath).filter(file => file.endsWith('.html'));
    subHtmlFiles.forEach(file => {
      const filePath = path.join(subdirPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Add the script before closing body tag
      content = content.replace('</body>', fixNavigationScript + '</body>');
      
      fs.writeFileSync(filePath, content);
    });
  }
});

console.log('✅ Documentation build complete!');
console.log('📁 Documentation generated in: ./documentation/');
console.log('🌐 To serve locally, run: npm run docs:serve');
console.log('🔗 Open: http://localhost:8080');
console.log('🎨 BEAUTIFUL compact styling with enhanced right sidebar!');
console.log('📋 GitHub Pages ready with .nojekyll file');