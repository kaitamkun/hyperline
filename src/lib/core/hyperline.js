import Color from 'color'

export const hyperlineFactory = (React) => {
  const HyperLine = ({ fontFamily, colors, plugins, background}) => {
    const lineStyle = {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      overflow: 'hidden',
      bottom: 0,
      marginLeft: '-1px',
      width: '100%',
      height: '18px',
      font: 'bold 12px Monospace',
      pointerEvents: 'none',
      fontFamily,
      background: background || Color(colors.black).darken(0.1).hslString()
    }

    return (
      <div style={lineStyle}>
        {plugins.map((item, index) => {
          const Plugin = item.componentFactory(React, colors)
          return <Plugin key={index} options={item.options} />
        })}
      </div>
    )
  }

  HyperLine.propTypes = {
    fontFamily: React.PropTypes.string.isRequired,
    colors: React.PropTypes.object.isRequired,
    plugins: React.PropTypes.array.isRequired,
    background: React.PropTypes.string
  }

  return HyperLine
}
