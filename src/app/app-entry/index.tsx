import Button from "@/shared/buttons/basic/large";

const App = () => {
  return (
    <div className="font-lato">
      <div className="p-6 space-x-4">
        <Button buttonStyle={{ color: 'green', rounded: 'lg', size: 'md' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'teal', rounded: 'lg', size: 'md' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'yellow', rounded: 'lg', size: 'md' }}>
          Button
        </Button>
        <Button buttonStyle={{ color: 'gray', rounded: 'lg', size: 'md' }}>
          Button
        </Button>
      </div>
      <Button buttonStyle={{ color: 'green', rounded: 'lg', size: 'md' }}>
        Button
      </Button>
    </div>
  )
}

export { App };
