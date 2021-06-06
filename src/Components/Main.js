import React, {useEffect} from "react";
import List from "./List/List";
import { Switch, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadItems} from "../Redux/actions";

const Main = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items)
  const error = useSelector((state) => state.items.error)
  const favArr = useSelector((state) => state.items.favArr);
  const cartArr = useSelector((state) => state.items.cartArr);

  useEffect(() => {
    dispatch(loadItems())
  }, [dispatch]);

  const mapWithFav = (item) => {
    return {
      ...item,
      isFav: favArr.includes(item.id),
    };
  };

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <List
              items={items.map(mapWithFav)}
              listEmpty={items}
              error={error}
              title={"Shoes:"}
              formCart={false}
            />
          )}
        />
        <Route
          path="/fav"
          render={() => (
            <List
              items={items
                .filter((item) => favArr.includes(item.id))
                .map(mapWithFav)}
              listEmpty={favArr}
              error={error}
              title={"Favourites:"}
              formCart={false}
            />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <List
              items={items
                .filter((item) => cartArr.includes(item.id))
                .map(mapWithFav)}
              listEmpty={cartArr}
              error={error}
              title={"Cart:"}
              formCart={true}
            />
          )}
        />
      </Switch>
    </main>
  );
};
export default Main;
