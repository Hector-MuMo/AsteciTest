import React, { useEffect, useState } from 'react'
import useGetData from '../Hook/useGetData'
import "../styles/WatherInfoTable.css"

const WeatherInfoTable = () => {
    const { watherData, getOne, } = useGetData()
    const [stateInfo, setStateInfo] = useState();

    const handleGetInfo = (id) => {
        //getOne(id)
        setStateInfo(watherData.filter(state => state._id === id))
    }

    useEffect(() => {
        console.log(stateInfo);
    }, [stateInfo]);

    return (
        <>
            <div className='table-container'>
                <div className='table-row'>
                    <div className='table-col-top'><span >_Id</span></div>
                    <div className='table-col-top'> <span >City Id</span></div>
                    <div className='table-col-top'><span >City Name</span></div>
                    <div className='table-col-top'><span >State</span></div>
                    <div className='table-col-top'><span >probability of precip</span></div>
                    <div className='table-col-top'><span >relative humidity</span></div>
                    <div className='table-col-top'><span >last report time</span></div>
                    <div className='table-col-top'><span >Va a llover?</span></div>
                </div>
                {watherData &&
                    watherData.map(info => {

                        return (
                            <div className='table-row'>
                                <div className='table-col'><span className='id' onClick={() => handleGetInfo(info._id)}>{info._id}</span></div>
                                <div className='table-col'> <span >{info.cityid}</span></div>
                                <div className='table-col'><span >{info.name}</span></div>
                                <div className='table-col'><span >{info.state}</span></div>
                                <div className='table-col'><span >{info.probabilityofprecip}</span></div>
                                <div className='table-col'><span >{info.relativehumidity}</span></div>
                                <div className='table-col'><span >{info.lastreporttime}</span></div>
                                <div className='table-col'><span >{info.probabilityofprecip > 60 || info.relativehumidity > 50 ? "Si llueve" : "No llueve"}</span></div>
                            </div>)
                    })}
                <p className='total'>{`Total de registros ${watherData.length}`}</p>
            </div>

            <div>
                {stateInfo &&
                    <div className='report-container'>
                        <h2>{`Información del estado ${stateInfo[0].name}`}</h2>
                        <div className='report'>
                            <p>Nombre de la ciudad: <span>{stateInfo[0].name}</span></p>
                            <p>Probabilidad de precipitación: <span>{stateInfo[0].probabilityofprecip}</span></p>
                            <p>Humedad: <span>{stateInfo[0].relativehumidity}</span></p>
                            <p>Último reporte de clima: <span>{stateInfo[0].lastreporttime}</span></p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default WeatherInfoTable