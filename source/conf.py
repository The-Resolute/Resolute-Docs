# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
project = 'Resolute'
copyright = '2024, Achyut Sapariya'
author = 'Achyut Sapariya'
release = 'v1.0'

# -- General configuration ---------------------------------------------------
extensions = [
    'myst_parser',  # For MyST Markdown support
    'sphinx.ext.autodoc',  # For automatic API documentation
    'sphinx.ext.napoleon',  # For Google and NumPy style docstrings
    'sphinx.ext.viewcode',  # To include links to source code
    'sphinx.ext.todo',  # To include TODOs
    'sphinx.ext.intersphinx',  # For cross-referencing other documentation
    'sphinx_tabs.tabs',  # For tabbed content
    'sphinxcontrib.plantuml',  # For PlantUML diagrams
    'sphinx.ext.githubpages',  # For GitHub Pages integration
]

myst_enable_extensions = [
    "colon_fence",  # To support ::: syntax for complex blocks
    "deflist",      # To support definition lists
]

# Paths that contain templates, relative to this directory.
templates_path = ['_templates']

# Patterns to ignore when looking for source files.
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------
html_theme = 'sphinx_material'  # Read the Docs theme
html_static_path = ['_static']  # Path for static files (e.g., CSS)

# Include custom CSS
html_css_files = [
    'custom.css',  # Add your custom CSS file here
]
html_js_files = [
    'custom.js',
]

# Theme options
html_theme_options = {
    'collapse_navigation': True,
    'display_version': True,
    'navigation_depth': 2,  # Adjust the depth of the sidebar navigation
    'includehidden': True,
    'titles_only': False
}

# Options for the todo extension
todo_include_todos = True

# PlantUML configuration (if needed)
plantuml = 'http://www.plantuml.com/plantuml/img/'

# If you want to enable the `sphinx.ext.githubpages` extension to handle GitHub Pages,
# make sure you have it l
