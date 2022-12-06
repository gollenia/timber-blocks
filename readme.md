# Timber Blocks

Timber Blocks is a Wordpress Gutenberg Plugin. It includes some new blocks, but it also allows you to easily redesign core blocks with yout very own twig template.

### Description

Templating with Timber/Twig is a breeze. I was always disappointed that there are no blocks that can easily be redesigend with a simple template language like twig. Always compiling React (which is great, though!) makes it difficult to change Blocks on the fly or include a block template in a theme.

Plugins like simple-blocks where not an option for me as they heavily rely on database and is not easily scalable across multiple sites. That's why I wrote this plugin. You can design all your blocks (including core blocks) in the twig language. All block attributes are automatically available als values.

### New Blocks

**Grid**: Set a grid layout and decide, how many colums to show on which media size. You can also reorder columns on mobile devices.

**Card**: Create a card component with many options (lables, badges, shadow, colors, etc.)

**Alarm**: Add a dismissable alarm to your page

**Description List**: A list with optional images or icons, captions and a description text

**Buttons**: Create buttons and groups of buttons, order them as you wish.

**Condition**: conditionally render blocks (currently depending on date/time)

**Header**: Makes it easier to create a header for your page template

**Image**: More options for your images

**Nav**: Navigation component, list subpages or pages of a given category

**Posts**: Show posts as cards

**Progress**: A progress bar, for donations, statos, whatever

**Topbar**: Navigation element for the page template editor

### Installation

For installation, you will need SSH access to your server and an installed composer environment. Simply run these commands to install the plugin:

```sh
git clone https://github.com/gollenia/timber-blocks.git
cd timber-blocks
composer install
```

You can recompile the Backend code for development with `npm start` or for production with `npm run build`

Feel free, of course, to make use of GitHub's actions ;-)

### Adopt blocks to your design

This plugin is made for developers, not for end-users. That's why I didn't put it on the Wordpress Plugin Database. Also, Bricjs doesn't include any styles, that's up to you. Bricks uses BEM-Style classes that fit into my base theme ([blueprint](https://github.com/gollenia/blueprint)), which also has no own css. To change Blocks to your needs, copy the `*.twig` files in the plugin's template folder to `your-theme/plugins/bricks` and modify them to your needs. The templates use BEM-style css classes, but change it to whatever framework you like. Please have a look at the [Twig Docs](https://twig.symfony.com/doc/2.x/).

```
{% set bg = get_color_by_slug(buttonColor) %}

<div>
    <a
        {% if hasModal %}data-modal="{{id}}"{% endif %}
        class="{% if hasModal %}has-modal{% endif %} button {{ isLink ? "button--link" }} {{ outline ? "button--outline" }} {{ size == "small" ? "button--small" }} {{ size == "large" ? "button-large" }}"
        style="color: {{ isLink or outline ? bg.color : (bg.light ? "#000000" : "#ffffff" ) }}; background: {{ isLink or outline ? "transparent" : bg.color }}; box-shadow: {{ outline ? "inset 0px 0px 0px 2px " ~ bg.color : "none" }};"
        href="{{ hasModal ? "#/" : url }}"
    >
    {{title}}
    </a>
</div>
```

In the upper example you see how it's done. The first line is a function to get the color value by it's slug. Use it if you like, or simply add the color slug as a class like Wordpress does it (`has-blue-color` for example)

The available attributes of each block are in it's twig template or the corresponding block.json, and you can use them name by name as simple twig variables.

### Changelog

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
