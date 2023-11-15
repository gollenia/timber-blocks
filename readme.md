# CTX Blocks

CTX Blocks is a Wordpress Gutenberg Plugin. It includes some new blocks that come in handy fopr generic websites

### Description

Templating with Timber/Twig is a breeze. I was always disappointed that there are no blocks that can easily be redesigend with a simple template language like twig. Always compiling React (which is great, though!) makes it difficult to change Blocks on the fly or include a block template in a theme.

Plugins like simple-blocks where not an option for me as they heavily rely on database and is not easily scalable across multiple sites. That's why I wrote this plugin. You can design all your blocks (including core blocks) in the twig language. All block attributes are automatically available als values.

### New Blocks

**Grid**: Set a grid layout and decide, how many colums to show on which media size. You can also reorder columns on mobile devices.

**Card**: Create a card component with many options (lables, badges, shadow, colors, etc.)

**Description List**: A list with optional images or icons, captions and a description text

**Buttons**: Create buttons that support not only links, but also modals and scripts

**Condition**: conditionally render blocks (currently depending on date/time)

**Progress**: A progress bar, for donations, statos, whatever

**SVG**: Insert an SVG graphic

### Installation

For installation, you will need SSH access to your server and an installed npm environment. Simply run these commands to install the plugin:

```sh
git clone https://github.com/gollenia/ctx-blocks.git
cd ctx-blocks
npm install
npm run build
```

Feel free, of course, to make use of GitHub's actions ;-)

### Legacy notice

As this plugin was once called "ctx-blocks", the internal block names still start with "ctx-blocks/...". This can not be changed, since websites already use these block names.

### Changelog

##### 2.0

-   Removed all Timber stuff and render most blocks through react
-   Removed alert, image, modal, header, footer, button-group, button-spacer, topbar, posts
-   Added SVG Block
-   Support for Wordpress 6.4
-   Make use of new Block registration System via block.json

##### 1.9.1

-   Bring back text align justify

##### 1.9

-   Adaptions to Wordpress 6
-   New blocks (section, header) for the template editor
-   Section gets deprecated for Groups

##### 1.8.1

-   Image can now have a link
-   Some translations fixed
-   More blocks moved to BEM-Style
-   Cards with links can now have child links

##### 1.8

-   New base block to force editors to use sections at base level
-   Redesigned Editor UI makes it easier to identify blocks
-   Description list improved
-   Some CSS moved to BEM Style (not all, yet)
-   Most blocks use useInnerBlocksProps() hook now

##### 1.7

-   Rewritten block registration to fit new block.json style and make it compatible with future Wordpress versions
-   Added spacer block to button-group
-   Many bug fixes
-   Grid and buttons now make use of the new useInnerBlocksProps() hook
-   All core blocks now have a "core-block" class for easier css

##### 1.6

-   All templates now use BEM-based classes
-   JavaScript for basic frontend functionality is now included
-   Modal block has been included into the button
-   Button can now have icon
-   description list and progress bar completely rewritten
-   The plugin now disables the standard wordpress Blocks like columns or image
-   A lot of bugfixes

##### 1.5.2

-   minor buffixes
-   card has now hover attribute
-   twig templates updated

##### 1.5.1

-   core/spacer now has auto-height feature for equalizing cards
-   cards now support button-groups
-   visibility switch has tailwind classes

##### 1.5

-   Cards now support labels and badges
-   New Block: Button Group
-   Normal buttons now support modals (modals block will be removed in 1.6)
-   Removed global block classes
-   Moved from Tailwind to component driven classes

##### 1.4

-   Upgraded to timber 2.0a
-   removed Accordion-Blocks
-   Progress bar completely rewritten

##### 1.3

-   Upgraded all Blocks to ApiVersion 2.0
-   Added language Support
-   New Block: Navigation
-   New Block: Posts

##### 1.2

-   New Block: Modal

##### 1.1

-   Introduced Twig
-   Moved from uiKit to Tailwindcss

##### 1.0

Initial release
