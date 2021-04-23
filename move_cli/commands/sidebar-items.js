initSidebarItems({"fn":[["check","Compile the user modules in `src` and the script in `script_file`"],["doctor","Run sanity checks on storage and build dirs. This is primarily intended for testing the CLI; doctor should never fail unless `publish --ignore-breaking changes` is used or files under `storage` or `build` are modified manually. This runs the following checks: (1) all modules pass the bytecode verifier (2) all modules pass the linker (3) all resources can be deserialized (4) all events can be deserialized (5) build/mv_interfaces is consistent with the global storage (TODO?)"],["publish",""],["run",""],["view","Print a module or resource stored in `file`"]]});