declare module "mi/App" {
  import { defineComponent } from "vue";
  const App: ReturnType<typeof defineComponent>;
  export default App;
}

declare module "mi/Clients" {
  import { defineComponent } from "vue";
  const Clients: ReturnType<typeof defineComponent>;
  export default Clients;
}

declare module "mi/Invoices" {
  import { defineComponent } from "vue";
  const Invoices: ReturnType<typeof defineComponent>;
  export default Invoices;
}

declare module "mi/routes" {
  export const routes: any;
}
