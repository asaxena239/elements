![Doors Design System Cover Photo](./docs/public/design-kit-cover.png)

# Doors Design System

A set of components built to be `composable`, `extendable`, and `usable`

## [Documentation](https://design.avail.co)

## Setup

1. Clone the repo with `gh repo clone rentalutions/elements`.
2. Install dependencies with `yarn`.
3. Start a storybook container that builds all the packages and watches for changes with `yarn start:dev`.

## Project Structure

This project is structured as a monorepo managed by [yarn workspaces](https://yarnpkg.com/features/workspaces).

```
.storybook
docs
└── pages
|   └── packages
|   |   └── [package-documentation].mdx
└── next.config.js
packages
└── [package]
│   └── src
│   └── stories
│   └── tests
│   └── CHANGELOG.md
│   └── package.json
│   └── README.md
utils
└── testing.tsx
```

## Contributing

The best way to contribute to this library is to look at open issues or file an issue yourself if one doesn't already exist.

To suggest a component be added to the library open an issue and spec out the component with it's API. No component will be added without proper documentation. You can tag [@pkrawc](https://github.com/pkrawc) or [@wade00](https://github.com/wade00) with reviewing the issue and weighing in when necessary.

To finish, create a pull request that solves the issue. At least one commit in the PR should be `resolves #[ISSUE_NUMER]`, this will auto-close the issue when the PR is merged into master.

### Releases

This project uses [changesets](https://github.com/changesets/changesets) to help us decide when and how changes to these packages should be released.

Changesets should be added along with each change in a package or set of packages using `yarn changeset`. This adds a hashed markdown file into the `.changeset`, which is used to determine how to version packages when they need to be released.

Releases are handled automatically when merging to the release branch, so the following manual steps are almost never needed.

To release a new set of packages run `yarn changeset version`. Verify the versions are correct and let changesets update the package.json files accordingly. Run `yarn release` which publishes packages in the workspace after building a fresh version of each.

## Adding Packages

Use the command `yarn create-package [package-name] [package description]`.

```bash
yarn create-package footer "A footer package for the avail design system"
```

## Code Preferences

### Separate component logic from layout when possible.

```jsx
// Good
function useComponent({ ref, ...props }) {
  const innerRef = useRef()
  const [bg, setBg] = useState("#000")
  useEffect(() => {
    if (window.innerWidth > 900) setBg("#FFF")
  }, [])
  return {
    ...props,
    bg,
    ref: mergeRefs(innerRef, ref),
  }
}
function Component(props, ref) {
  const { bg, ...htmlProps } = useComponent({ ...props, ref })
  return <Box {...htmlProps} sx={{ bg }} />
}

// Bad
function Component(props, ref) {
  const innerRef = useRef()
  const [bg, setBg] = useState("#000")
  useEffect(() => {
    if (window.innerWidth > 900) setBg("#FFF")
  }, [])
  return <Box {...props} ref={mergeRefs(innerRef, ref)} sx={{ bg }} />
}
```

Yes it's more lines for a trivial example like this but in my experience it makes the component much more refactorable.

### Prefer function declarations over assignments for component definition.

```jsx
// Good
function MyComponent(props) {
  return <div />
}

// Bad
const MyComponent = (props) => <div />
```

### Prefer named exports.

```js
// Good
export function Section() {}
export function SectionItem() {}

// Bad
export default function Section() {}
export function SectionItem() {}
```

## Naming Conventions

Name files in lowercase with hyphen seperation for spaces.

```zsh
# Good
touch components/file-upload.js

# Bad
touch components/FileUpload.js
```
