# Changelog

## 1.5.0 - 2026-06-09

### Added

- New components: Breadcrumb, Calendar, DatePicker, Combobox, RadioGroup, Drawer, Accordion, AlertDialog.
- `truncate` prop on the Select trigger for ellipsis overflow on long values.
- Additional props added to support more in-depth Flex and Grid styles.

### Changed

- Prop types are now exported for all single-export components.
- Storybook renders every story on a themed surface so components stay legible across all themes.

### Notes

- Calendar and DatePicker use `react-day-picker` as an optional peer dependency. Install it alongside the package only if you use those components.
