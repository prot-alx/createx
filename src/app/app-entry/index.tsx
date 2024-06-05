const App = () => {
  return (
    <div className="font-lato">
      <div className="text-2xl font-bold shadow-lg mb-8">1234567890</div>
      <div className="grid grid-cols-4 gap-4">
        <div className="w-11 h-11 bg-danger"></div>
        <div className="shadow-lg w-11 h-11 bg-success"></div>
        <div className="shadow-xl w-11 h-11 bg-warning"></div>
        <div className="shadow-2xl w-11 h-11 bg-info"></div>

        <div className="shadow-md w-11 h-1"></div>
        <div className="shadow-lg w-11 h-11"></div>
        <div className="shadow-xl w-11 h-11"></div>
        <div className="shadow-regular w-11 h-11"></div>

        <div className="text-large text-gray-900">ASDFGHJJKLZXCBNM</div>
        <div className="text-small text-gray-900">asdfgfgjghkwefwegdfbdfb</div>
        <div className="text-extraextrasmall text-gray-900">1233456467867897890</div>
        <div className="text-lead text-gray-900">knijoasnA</div>
      </div>
    </div>
  )
}

export { App };
