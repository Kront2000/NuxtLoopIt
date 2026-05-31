export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    button: {
      slots: {
        base: 'w-fit '
      },
      variants: {

        variant: {
          solid: {
            base: 'text-bg bg-emerald-500 hover:bg-emerald-600'
          }
        }
      }
    },
    formField: {
      slots: {
        label: 'text-white font-roboto text-base'
      }
    },
    input: {
      variants: {
        variant: {
          outline: 'bg-bg/40 ring-white/20 text-white/80 '
        }
      }
    },
    form: {
      base: 'flex flex-col items-center'
    },
    modal: {
      variants: {
        fullscreen: {
          false: {
            content: 'w-fit'
          }
        }
      }
    }

  },

})
