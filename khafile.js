let project = new Project('KhaQuick');
project.addParameter('-main quick/KhaQuick')
project.addAssets('assets/**');
project.addSources('src');
project.windowOptions.width = 1024;
project.windowOptions.height = 768;
//project.addDefine('');
//project.addShaders('src/Shaders/**');
//project.addLibrary('');
resolve(project);
