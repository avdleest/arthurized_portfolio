# Design ideas portfolio

## General design

Very clean look, based on <https://www.squarespace.com/templates/utica-demo>.
Use javascript to create collapsable nav bar maybe?
Use smaller picture based overview for projects as seen in <https://www.moneybird.nl/ervaringen/onze-gebruikers/>.
Use some ARIA `role` stuff for practicing.

## Text styles

Urbanist as heading style, Poppins as paragraph <https://fonts.google.com/specimen/Urbanist>

## Icons

Use Font Awesome as a resource for nice icons.
On hover of navbar, use same styling as like moneybird: light gray bar that appears, theme color when selected. This is used in the following matter:

```css
.header-navigation-nav-list-item a:active::after, .header-navigation-nav-list-item a.active::after, .header-navigation-nav-list-item a:hover::after {
    transform: scale(1);
}

.header-navigation-nav-list-item a::after {
    background-color: rgba(140,198,255,.3);
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
    transform: scale(0);
    transition: transform 200ms;
}
```
