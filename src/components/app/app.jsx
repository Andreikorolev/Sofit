import React, { useState } from "react";
import { connect } from "react-redux";
import TrafficItem from "../traffic-item/traffic-item";

const App = ({ traffic }) => {
  const [elementsNumber, setElementsNumber] = useState(5);
  const [maxSpeed, setMaxSpeed] = useState(60);
  const [filterSpeed, setFIlterSpeed] = useState(39);
  const [classFilter, setClassFilter] = useState(`all`);

  const handleElementsNumberChange = (event) => {
    setElementsNumber(event.target.value);
  };

  const handleMaxSpeedChange = (event) => {
    setMaxSpeed(event.target.value);
  };

  const handleFilterSpeed = (event) => {
    setFIlterSpeed(event.target.value);
  };

  const handleClassFilterChange = (event) => {
    setClassFilter(event.target.value);
  };

  const filterByParam = (traffic, filterSpeed, classFilter) => {
    return traffic
      .filter((item) => item.speed > filterSpeed)
      .filter((item) => {
        if (classFilter != `all`) {
          return item.class === classFilter;
        }

        return item;
      });
  };

  return (
    <div className="container row">
      <h1>Трафик транспортных средств</h1>
      <div className="filters row">
        <div className="col s6 xl5">
          <div className="filter__title">Кол-во отображаемых элементов:</div>
          <select className="filter" onChange={handleElementsNumberChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="col s6 xl5">
          <div className="filter__title">Максимально разрешеная скорость:</div>
          <select
            className="filter"
            onChange={handleMaxSpeedChange}
            defaultValue={maxSpeed}
          >
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="90">90</option>
          </select>
        </div>
        <div className="col s12 xl10">
          <div className="filter__title">
            Показать записи со скоростью больше чем: <b>{filterSpeed} км/ч</b>
          </div>
          <input
            className="filter"
            type="range"
            min="39"
            max="100"
            value={filterSpeed}
            step="1"
            onChange={handleFilterSpeed}
          />
        </div>
        <div className="col s12 xl5">
          <div className="filter__title">Класс транспортных средств:</div>
          {(classFilter === `all` || classFilter === `car`) && (
            <i className="col class-type-icon fas fa-car-side"></i>
          )}
          {(classFilter === `all` || classFilter === `truck`) && (
            <i className="col class-type-icon fas fa-truck-moving"></i>
          )}
          {(classFilter === `all` || classFilter === `bus`) && (
            <i className="col class-type-icon fas fa-bus"></i>
          )}
          {(classFilter === `all` || classFilter === `motorcycle`) && (
            <i className="col class-type-icon fas fa-motorcycle"></i>
          )}
          <select
            className="filter"
            onChange={handleClassFilterChange}
            defaultValue={classFilter}
          >
            <option value="all">Весь транспорт</option>
            <option value="car">Автомобили</option>
            <option value="truck">Грузовой транспорт</option>
            <option value="bus">Автобусы</option>
            <option value="motorcycle">Мотоциклы</option>
          </select>
        </div>
      </div>
      {filterByParam(traffic, filterSpeed, classFilter).length ? (
        <ul className="traffic col s12 xl10">
          {filterByParam(traffic, filterSpeed, classFilter)
            .slice(0, elementsNumber)
            .map((item, index) => (
              <TrafficItem
                key={`${index}-${traffic.length}`}
                itemData={item}
                maxSpeed={maxSpeed}
              />
            ))}
        </ul>
      ) : (
        <div>Нет подходящих записей, измените параметры фильтрации.</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  traffic: state.vehicleTrafficEntry,
});

export default connect(mapStateToProps)(App);
