# Daniels Super Awesome Blog.

## The Code

### Post Form
Created a component which handles the Post Form, which is used the create and update the post.

### Articles Repository
Used to manage the api calls to the "backend".

### Data Table
Easy way to push data into a table.

## Tech 

### NuxtJs 3

Never used this before, so it was an Adventure.
I also thought I should push my self to use **Composition API** as I only have used Options API in the past.
This part of the project was a breeze, and really enjoyed using it.
   
### TailwindCSS

The module @nuxtjs/tailwindcss provides the framework.

I have **not** included an PostCSS/SCSS file, as that i dont believe would be required for this.

I did finally create CSS variables for the theme.

### @nuxtjs/color-mode

This looked to be an easy mode for toggling dark mode, took longer than expected to get it working.

First was the issue that instead of using the class `dark` (as with standard tailwind), this module defaults to `darkMode`. Luckily there is a config setting to set this. 

Changing the toggle switcher to the correct theme on page load was an issue, mainly because the module has a `system` default, which takes the theme from the OS you are using. Many iterations and tweaks were created.

### vee-validate

This was the worst thing to get setup.

Seems there are issues with different version of NuxtJS, The `Form` component was causing the validation only on exiting an input, rather than on change.


### notiwind

Notification library for tailwind.

