import { Locations } from '@app/constants/locations 1';

export const getLocName = (id: string | number | undefined) => {
  const find: any = Locations.find((item: any) => item.id == id);
  if (find && find != undefined) {
    return find?.name;
  }

  return '';
};
