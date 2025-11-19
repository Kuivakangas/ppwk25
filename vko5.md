  useEffect(() => {  
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    const d=document, g=d.createElement('script'), s: HTMLScriptElement=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://pilvipalvelut-matomo.2.rahtiapp.fi/js/container_{{omakoodi}}.js'; 
    if (s && s.parentNode) {
      s.parentNode.insertBefore(g,s);
    }
  }, []);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
   }