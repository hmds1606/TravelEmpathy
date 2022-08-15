export interface ILayoutHeaderUIProps {
  onClickMainLogo: () => void;
  onClickLogin: () => void;
  onClickJoinLogout: () => void;
  onClickBasket: () => void;
  data: {
    fetchUserLoggedIn: {
      name: string;
    };
  };
  basketItems: never[];
}
