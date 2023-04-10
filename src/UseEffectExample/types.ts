export enum RESOURCE_TYPE {
  POSTS = 'posts',
  USERS = 'users',
  COMMENTS = 'comments',
}

export const resourceTypeColorMap = {
  [RESOURCE_TYPE.USERS]: 'red',
  [RESOURCE_TYPE.POSTS]: 'green',
  [RESOURCE_TYPE.COMMENTS]: 'blue',
};
