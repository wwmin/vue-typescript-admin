declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
// support-loader.d.ts
declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.html" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}
