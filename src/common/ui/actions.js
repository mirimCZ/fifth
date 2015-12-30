export const ON_SIDE_MENU_CHANGE = 'ON_SIDE_MENU_CHANGE';
export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
export const OPEN_COLOR_PICKER = 'OPEN_COLOR_PICKER';

export function onSideMenuChange(isOpen) {
  return {
    type: ON_SIDE_MENU_CHANGE,
    payload: {isOpen}
  };
}

export function toggleSideMenu() {
  return {
    type: TOGGLE_SIDE_MENU
  };
}

export function openColorPicker(containerIndex, position, stackId) {
  return {
    type: OPEN_COLOR_PICKER,
    payload: {containerIndex, position, stackId}
  };
}
