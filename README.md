# eslint-config-apolo

This package provides .eslintrc configuration (without any Framework frontend plugin) as an extensible shared config.

<aside>
ℹ️ Simple configuration, based on best javascript practices and rewarding the simplest and most modern coding for JavaScript / Typescript.
</aside>

## Usage

1- Install the correct versions of each package, which are listed by the command:

```jsx
npx install-peerdeps --dev eslint-config-apolo
```

2- Install eslint-config-apolo

```jsx
npm install --save-dev eslint-config-apolo // This will download the @latest version
npm install --save-dev eslint-config-apolo@1.0.0 // Or can select version
```

3- Add in “extends” of your .eslintrc file: “apolo”

```jsx
{
...,
"extends": [
		...,
		"apolo"
	]
}
```

You can make sure this module lints with itself using `npm run lint`