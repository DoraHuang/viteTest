export const choices=
[
  {
    path: "/login",
    name: "Login",
    component: () => import("/@/views/login/Login.vue"),
  },
  {
    path: "/",
    name: "首頁",
    component: TabsView,
    redirect: "/versionTable",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: {
          icon: "dashboard",
        },
        component: BlankView,
        children: [
          {
            path: "dashboard",
            name: "工作台",
            meta: {
              page: {
                closable: false,
              },
            },
            component: () => import("/@/views/Home.vue"),
          },
          {
            path: "setting",
            name: "設定",
            component: () => import("/@/views/Home.vue"),
          },
        ],
      },
      {
        name: "uploadFileConfirm",
        path: "/uploadFileConfirm",

        component: () =>
          import("/@/views/uploadFileConfirm/UploadFileConfirm.vue"),
      },
      {
        name: "versionTable",
        path: "/versionTable",

        component: () => import("/@/views/versionTable/VersionTable.vue"),
      },
      {
        path: "demandConfirmationSimulation",
        name: "demandConfirmationSimulation",
        meta: {
          icon: "dashboard",
        },
        component: BlankView,
        children: [
          {
            path: "DCSIndex",
            name: "DCSIndex",
            meta: {
              page: {
                closable: false,
              },
            },
            component: () => import("/@/views/demandConfirmation/index.vue"),
          },
        ],
      },
      {
        path: "optimalDemandConfirmation",
        name: "optimalDemandConfirmation",
        meta: {
          icon: "dashboard",
        },
        component: BlankView,
        children: [
          {
            path: "ODCIndex",
            name: "ODCIndex",
            meta: {
              page: {
                closable: false,
              },
            },
            component: () =>
              import("/@/views/optimalDemandConfirmation/index.vue"),
          },
        ],
      },

      {
        path: "mpssimulation",
        name: "MPSSimulation",
        meta: {
          icon: "dashboard",
        },
        component: BlankView,
        children: [
          {
            path: "MPSIndex",
            name: "MPSIndex",
            meta: {
              page: {
                closable: false,
              },
            },
            component: () => import("/@/views/mpsSimulation/index.vue"),
          },
        ],
      },
      {
        path: "demandFulfillment",
        name: "demandFulfillment",
        meta: {
          icon: "dashboard",
        },
        component: BlankView,
        children: [
          {
            path: "index",
            name: "Index",
            meta: {
              page: {
                closable: false,
              },
            },
            component: () => import("/@/views/demandfulfillment/index.vue"),
          },
        ],
      },
      {
        path: "optimalPM",
        name: "optimalPM",
        meta: {
          icon: "dashboard",
        },
        component: BlankView,
        children: [
          {
            path: "PMIndex",
            name: "PMIndex",
            meta: {
              page: {
                closable: false,
              },
            },
            component: () => import("/@/views/optimalPM/index.vue"),
          },
        ],
      },
      {
        path: "redunantWIP",
        name: "redunantWIP",
        meta: {
          icon: "dashboard",
        },
        component: BlankView,
        children: [
          {
            path: "RedunantIndex",
            name: "RedunantIndex",
            meta: {
              page: {
                closable: false,
              },
            },
            component: () => import("/@/views/redundantWIP/index.vue"),
          },
        ],
      },
      {
        path: "moveGapDetractor",
        name: "moveGapDetractor",
        meta: {
          icon: "dashboard",
        },
        component: BlankView,
        children: [
          {
            path: "DMAIndex",
            name: "DMAIndex",
            meta: {
              page: {
                closable: false,
              },
            },
            component: () => import("/@/views/movegapdetractor/index.vue"),
          },
        ],
      },
    ],
  },
];
