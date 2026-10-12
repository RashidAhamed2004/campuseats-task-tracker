FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN if [ -f CampusEats.Api/CampusEats.Api.csproj ]; then \
        dotnet publish CampusEats.Api/CampusEats.Api.csproj -c Release -o /app; \
    else \
        dotnet publish -c Release -o /app; \
    fi

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .
ENV ASPNETCORE_URLS=http://0.0.0.0:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "CampusEats.Api.dll"]
