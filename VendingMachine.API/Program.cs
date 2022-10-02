using VendingMachine.Service;
using VendingMachine.Repository;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<VendingMachineService>();
builder.Services.AddSingleton<VendingMachineRepository>();

builder.Services.AddCors(options => options.AddPolicy("Cors",
builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod();
}));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors("Cors");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
