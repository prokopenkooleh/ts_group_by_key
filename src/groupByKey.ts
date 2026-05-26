type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return Object.groupBy(items, (item) => String(item[key])) as GroupsMap<T>;
}
