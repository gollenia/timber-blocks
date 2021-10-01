# CTX Blocks

Timber-Empowered blocks

### Description 

Templating with Timber/Twig is a breeze. I was always disappointed that there are no blocks that can easily be redesigend with a simple template language like twig. If you have ever heard of [Timber](https://upstatement.com/timber/), you brobably know what I mean.
Especially when it comes to integration of blocks into an existing theme/CSS-Framework, you have a lot of effort.

Plugins like simple-blocks where not an option for me as it heavily relies on database and is not easily scalable across multible sites. That's why I whrote this very plugin.

### Installation

For installation, you will need SSH access to your server and an installed composer environment. Simply run these commands to install the plugin:

```sh
git clone https://github.com/gollenia/ctx-blocks.git
cd ctx-blocks
composer install
```
Of course, you still have to activate the plugin in your Wordpress installation. For the modal to work, you will need some javascript, i used alpine

### Adopt blocks to your design

This plugin is made for developers, not for end-users. That's why I didn't put it on the Wordpress Plugin Database. To adopt Blocks, copy the files in the template folder to `your-theme/plugins/ctx-blocks` and modify them to your needs. When installed, they use tailwind classes, but use whatever CSS framework you like. Please have a look at the [Twig Docs](https://twig.symfony.com/doc/2.x/) aswell as the [Documentation on Timber](https://timber.github.io/docs/v2)

### Changelog

##### 1.5.2
* minor buffixes
* card has now hover attribute
* twig templates updated

##### 1.5.1
* core/spacer now has auto-height feature for equalizing cards
* cards now support button-groups
* visibility switch has tailwind classes

##### 1.5
* Cards now support labels and badges
* New Block: Button Group
* Normal buttons now support modals (modals block will be removed in 1.6)
* Removed global block classes
* Moved from Tailwind to component driven classes

##### 1.4
* Upgraded to timber 2.0a
* removed Accordion-Blocks
* Progress bar completely rewritten

##### 1.3
* Upgraded all Blocks to ApiVersion 2.0
* Added language Support
* New Block: Navigation
* New Block: Posts

##### 1.2 
* New Block: Modal

##### 1.1
* Introduced Twig
* Moved from uiKit to Tailwindcss

##### 1.0
Initial release

