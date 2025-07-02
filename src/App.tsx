import { Header, Main } from "./app-layout";
import AppHeader from "./components/app-header";
import ExtensionHeader from "./components/extensions-header";
import H1 from "./components/h-1";
import ButtonGroup from "./components/button-group";
import ExtensionsCards from "./components/extensions-cards";
import ExtensionsCard from "./components/extensions-card";
import { data } from "./lib/data";
import { useMemo, useState } from "react";
import { type ButtonFilters, type Extension } from "./lib/types";

function App() {
  const [extensions, setExtensions] = useState<Extension[]>(data);
  const [activeFilter, setActiveFilter] = useState<ButtonFilters>("all");

  const filteredExtensions = useMemo(() => {
    switch (activeFilter) {
      case "active":
        return extensions.filter((extension) => extension.isActive);
      case "inactive":
        return extensions.filter((extension) => !extension.isActive);
      case "all":
      default:
        return extensions;
    }
  }, [extensions, activeFilter]);

  function handleFilterChange(filter: ButtonFilters) {
    setActiveFilter(filter);
  }

  function handleDeleteExtension(idToDelete: Extension["id"]) {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.id !== idToDelete)
    );
  }
  function handleToggleExtension(idToToggle: Extension["id"]) {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.id === idToToggle
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  }
  return (
    <>
      <Header>
        <AppHeader />
      </Header>

      <Main>
        <ExtensionHeader>
          <H1 />
          {/*bu fonksiton alt bileşende hemen kullanılcaktır. */}
          <ButtonGroup
            onFilterChange={handleFilterChange}
            activeFilter={activeFilter}
          />
        </ExtensionHeader>

        <ExtensionsCards>
          <ExtensionsCard
            extensions={filteredExtensions}
            onDeleteExtension={handleDeleteExtension}
            onToggleExtension={handleToggleExtension}
          />
        </ExtensionsCards>
      </Main>
    </>
  );
}

export default App;
