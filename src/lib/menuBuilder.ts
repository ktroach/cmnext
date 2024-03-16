import useHref from "@/hooks/use-href";
import { MenuItemType } from "@/components/templates/dynamic-navmenu";

export const buildDyanmicMenus = (menuData: any) => {
    const menuItems: MenuItemType[] = [];
      if (menuData && menuData.length > 0) {
      let groupName = '';
      for (let i = 0; i < menuData.length; i++) {
        const menuProps = menuData[i];
        const slugItems = menuProps?.slug ? menuProps.slug : undefined;
        if (slugItems && slugItems.length > 0) {
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