import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import { ButtonCircle } from "./components/ButtonCircle/ButtonCircle";
import { Category, categoryKeys } from "./components/Category/Category";
import { CategoryModal } from "./components/CategoryModal/CategoryModal";
import { EditButton } from "./components/EditButton/EditButton";
import { Task, taskKeys } from "./components/Task/Task";
// import { categoryList } from "./data/categoryList";
import { EditingProvider } from "./providers/EditingProvider";

const DEFAULT_NEW_TASK = {
  [taskKeys.done]: false,
  [taskKeys.copytext]: "",
  [taskKeys.category]: "",
};

const DEFAULT_NEW_CATEGORY = {
  [categoryKeys.title]: "???",
  [categoryKeys.color]: "white",
};


const todoList = JSON.parse(localStorage.getItem("todolist"));
const categoryList = JSON.parse(localStorage.getItem("categories"));

function App() {
  let [list, setList] = useState(todoList || []);
  list = list || [];
  let [categories, setCategories] = useState(categoryList || []);
  categories = categories || [];

  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState();
  const [activeCategoryId, setActiveCategoryId] = useState();

  const saveList = (newList) => {
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };
  const updateList = (index, key, value) => {
                       // 0, "done", true <= новое значение
                       // 0, "text", "new text" <= новое значение
                       // 0, "category", "7" <= новое значение
    list[index][key] = value;
    saveList([...list]);
  };
  const addTask = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_TASK, id }, ...list]; // const newList = [{ "done": false, "copytext": "", "category": "", id: id }, ...list];
    saveList(newList);
  };
  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    saveList(newList);
  };
  
  const saveCategories = (newList) => {
    setCategories(newList);
    localStorage.setItem("categories", JSON.stringify(newList));
  };
  const addCategory = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_CATEGORY, id }, ...categories];
    saveCategories(newList);
  };
  const updateCategory = (index, key, value) => {
    categories[index][key] = value;
    saveCategories([...categories]);
  };
  const deleteCategory = (id) => {
    const newList = categories.filter((item) => item.id !== id);
    saveCategories(newList);
  };

  const renderItem = (item, index) => (
    <Task
      key={item.id}
      index={index}
      {...item}
      // =
      // id={item.id}
      // done={item.done}
      // text={item.text}
      // category={item.category}

      updateList={updateList}
      deleteTask={deleteTask}
      setCategoryModalOpen={setCategoryModalOpen}
      setActiveTask={setActiveTask}
      
    />
  );

  const closeCategoryModal = () => {
    setCategoryModalOpen(false);
  };
  const changeCategory = (categoryId) => {
    updateList(activeTask.index, taskKeys.category, categoryId); // 0, "category", "7" <= новое значение
    closeCategoryModal();
  };

  const renderCategoryItem = (item, index) => (
    <Category
      index={index}
      {...item}
      key={item.id}
      isActive={item.id === activeCategoryId}
      setActiveCategoryId={setActiveCategoryId}
      updateCategory={updateCategory}
      deleteCategory={deleteCategory}
    />
  );

  useEffect(() => {
    if (!activeCategoryId) {
      setList(todoList);
      return;
    }
    const newList = todoList.filter((item) => item.category === activeCategoryId);
    setList(newList);
  }, [activeCategoryId]);
  
  return (
    <EditingProvider>
      <div className="app">
        <div className="app__header">
          <h1 className="app__duedate">Today</h1>
          <EditButton />
        </div>
        <div className="app__box">
          <div className="app__tasks">{list.map(renderItem)}</div>
          <div className="app__categories">
            <div className="app__categories-head">Categories</div>
            <div className="app__categories-list">{categories.map(renderCategoryItem)}</div>
          </div>
        </div>
        {/* <ButtonCircle onClick={addCategory} /> */}
        <ButtonCircle onClick={addTask} />
        {isCategoryModalOpen && (
          <CategoryModal
            activeCategoryId={activeTask.category}
            onClick={changeCategory}
            closeModal={closeCategoryModal}
          />
        )}
      </div>
    </EditingProvider>
  );
}

export default App;


// const todoList = [
//   {
//    done: false,
//    text: "Start making a presentation",
//    category: "2",
//   },
//   {
//     done: false,
//     text: "Pay for rent",
//     category: "5",
//   },
//   {
//     done: false,
//     text: "Buy a milk", 
//     category: "3",
//   },
//   {
//     done: true,
//     text: "Don’t forget to pick up Mickael from school",
    
//   },
//   {
//     done: true,
//     text: "Buy a chocolate for Charlotte",
//     category: "3",
//   },
// ];

// localStorage.setItem("todoList",JSON.stringify(todoList));
// console.log(JSON.parse(localStorage.getItem("todoList")));

// обьеденили 2 функции updateList и updateListText в одну updateList
 // const updateList = (index, checked) => {
  //  list[index].done = checked;
  //  setList([...list]);
  //  localStorage.setItem("todolist",JSON.stringify([...list]));
  // };

  // const updateListText = (index, text) => {
  //   list[index].text = text;
  //   setList([...list]);
  //   localStorage.setItem("todolist",JSON.stringify([...list]));
  // };