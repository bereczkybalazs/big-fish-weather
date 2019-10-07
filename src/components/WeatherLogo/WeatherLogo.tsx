import React from "react";

class Weather extends React.Component<{logo: string}> {

    render(): React.ReactElement<any>{
        return (
            <div className="weather-logo">
                <img src={`http://openweathermap.org/img/wn/${this.props.logo}@2x.png`}/>
            </div>
        );
    }
}