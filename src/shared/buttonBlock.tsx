import Button from "./buttons/basic/large"

export const  ButtonBlock = () => {
    return (
        <div className="p-6 space-x-4 ">
        <Button buttonStyle={{ color: 'green', rounded: 'sm', size: 'regular' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'teal', rounded: 'sm', size: 'small' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'yellow', rounded: 'sm', size: 'large' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'gray', rounded: 'sm', size: 'regular' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'gray', rounded: 'sm', size: 'small' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'gray', rounded: 'sm', size: 'small' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'gray', rounded: 'sm', size: 'regular' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'gray', rounded: 'sm', size: 'large' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'gray', rounded: 'sm', size: 'regular' }}>
          Button
        </Button>
      </div>
    )
}