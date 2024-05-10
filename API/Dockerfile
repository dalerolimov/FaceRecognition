FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
ENV ASPNETCORE_URLS=http://+:1915;http://+:1905
WORKDIR /app
EXPOSE 1915
EXPOSE 1905

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["FaceRecognitionAPI.csproj", "FaceRecognitionAPI/"]
RUN dotnet restore "FaceRecognitionAPI/FaceRecognitionAPI.csproj"

WORKDIR "/src/FaceRecognitionAPI"
COPY . .

RUN dotnet build "FaceRecognitionAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FaceRecognitionAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FaceRecognitionAPI.dll"]