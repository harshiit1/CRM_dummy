using CRM_D.API.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.RegistrarServices(typeof(Program));

var app = builder.Build();

app.RegistrarPipelineComponents(typeof(Program));

app.Run();