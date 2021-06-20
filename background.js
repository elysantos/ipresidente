const names = ['Bolsonaro'],
      elements = [...document.getElementsByTagName('*')],
      nickname = 'Idiota',
      getRandomPosition = array => Math.floor(Math.random() * array.length) - 0 || 7,
      getRandomNickname = array => array[getRandomPosition(array)],
      main = () => elements.forEach((element) => { // code by @pauladiniz - https://github.com/pauladiniz/loremipsum4president <- this girl is awesome <3
        let validNodes = [...element.childNodes].filter(n => n.nodeType === 3)
        validNodes.forEach((node) => {
          let text = node.nodeValue,
              politicsSUX = text.replace(new RegExp(names.join('|'), 'ig'), 
              nickname) // here i put my function to get random nicknames :p
          politicsSUX !== text ? node.nodeValue = politicsSUX : ''
        })
      })
      main()