import useHref from "@/hooks/use-href";
import { MenuItemType } from "@/components/templates/dynamic-navmenu";

export const buildDyanmicMenus = (menuData: any) => {
    const menuItems: MenuItemType[] = [];
      if (menuData && menuData.length > 0) {
      let groupName = '';
      for (let i = 0; i < menuData.length; i++) {
        const menuProps = menuData[i];
        const slugItems = menuProps?.slugItems ? menuProps.slugItems : undefined;
        const superGroup = menuProps && menuProps?.type === 'super-group' ? menuProps : undefined
        if (superGroup) {
          const subMenus = [];
          const superGroupItems = superGroup?.items ? superGroup.items : undefined
          if (superGroupItems && superGroupItems.length > 0) {
            for (let j = 0; j < superGroupItems.length; j++) {
              const superGroupItem = superGroupItems[j];
              subMenus.push({
                label: superGroupItem.label,
                href: useHref(superGroupItem),
                type: 'navlink',
                items: [],
              });
            }
          }
          menuItems.push({
            label: superGroup.label.toUpperCase(),
            href: useHref(menuProps),
            type: 'super-group',
            items: subMenus,
          });
        }
        if (!superGroup && slugItems && slugItems.length > 0) {
          if (slugItems.length > 1) {
            if (groupName !== slugItems[0]) {
              groupName = slugItems[0];
              const subMenus = [];
              for (let j = 1; j < slugItems.length; j++) {
                const slugItem = slugItems[j];
                subMenus.push({
                  label: slugItem,
                  href: useHref(menuProps),
                  type: 'navlink',
                  items: [],
                });
              }
              menuItems.push({
                label: groupName.toUpperCase(),
                href: useHref(menuProps),
                type: 'group',
                items: subMenus,
              });
            }
          } else {
            // this will appear at the top of the menu as a single menu item
            menuItems.push({
              label: menuProps?.label ? menuProps.label.toUpperCase() : '',
              href: useHref(menuProps),
              type: 'group',
              items: [],
            });
          }
        }
      }
    }
    return menuItems;
  };