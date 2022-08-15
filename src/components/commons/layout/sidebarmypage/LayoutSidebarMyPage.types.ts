export interface IMenuEl {
  page: any;
  name: string;
}

export interface ILayoutSidebarMyPagePresenterProps {
  onClickMenu: any;
  activedMenu: string;
  userData: {
    fetchUserLoggedIn: {
      name: string;
    };
  };
  totalPointData: {
    fetchPointTransactions: any;
  };
}
