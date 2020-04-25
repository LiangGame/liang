type Json = Record<string, any>;

export interface InitState {
  breadcrumb: Array<Json>;
}

export interface Action {
  type: string;
  payload: any;
}

export const initState: InitState = {
  breadcrumb: [],
};

const reducer = (preState: InitState, action: Action): InitState => {
  const newState = Object.assign({}, initState);
  switch (action.type) {
    case 'change_breadcrumb':
      newState.breadcrumb = [...action.payload];
      return newState;
    default:
      throw new Error('未匹配到action.type');
  }
};

export default reducer;
